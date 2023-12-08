/*
 * SOFTWARE-ENABLED FLASH (“SEF”)
 * Application Programming Interface (API)
 * SEFAPI.h
 *
 * Copyright (C) 2018, 2019, 2020, 2021, 2022, 2023 - KIOXIA Corporation. All rights reserved.
 *
 * This software is licensed under the 3-Clause BSD License.
 *
 * Redistribution and use in source and binary forms, with or without modification, are permitted
 * provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following
 * disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following
 *  disclaimer in the documentation and/or other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES,
 * INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 * IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
 * OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 *  @file SEF Library API
 *
 *  Functions and structures for configuring and using SEF units
 *
 *  @version   1.14i
 *  @date      October 2023
 *  @copyright Copyright (C) 2018, 2019, 2020, 2021, 2022, 2023 - KIOXIA Corporation. All rights reserved.
 *
 *  @defgroup ApiManCmd API Management Commands
 *  @defgroup ApiDataCmd Data Access Commands
 *  @defgroup CommonStructs Common Structures
 *  @defgroup CallbackStructs Callback Structures
 *  @defgroup EventsStructs Events
 *  @defgroup Enums Enumerated Types
 */

#ifndef SEFAPI_h
#define SEFAPI_h

#ifdef __cplusplus
extern "C" {
#endif

#include <stdint.h>
#if !defined(__APPLE__) && !defined(_MSC_VER)
#include <endian.h>
#endif
#if defined(_MSC_VER)
#define PACKED
#define le64toh(U) (U)
#define htole64(U) (U)
#pragma warning(disable : 4200)  /* zero-sized array */
#pragma warning(disable : 4201)  /* nameless struct/union */
#define NONNULL()
#else
#define PACKED __attribute__((packed))
#define NONNULL(args...)  __attribute__((nonnull (args)))
#include <sys/uio.h>
#endif

#pragma pack(push,8)

#define SEFAPIVersion 0x010e
#define SEFMaxRootPointer 8
#define SEFMaxReadQueues 8

/**
 *  @ingroup    Enums
 */
enum SEFDefectManagementMethod {
  kPacked,          /**< Offset address in a super block is consecutive. Size of super block is reduced with defected
                         block(s). This results in slower reads due to the extra level of indirection incurred. */
  kFragmented,      /**< Defective blocks are left in place, and are simply marked as non-addressable. Over time, this
                         can result in a device with a gradually decreasing usable size. This scheme has the fastest
                         read performance, but comes at the cost of additional management complexity that the host will
                         be responsible for. */
  kPerfect          /**< Offset address is consecutive. Size of super block is fixed. Number of super blocks is reduced
                         with defected block(s). This has the slowest read performance because this remapping has the
                         potential to cross block boundaries */
} PACKED;

/**
 *  @ingroup    Enums
 */
enum SEFAPIIdentifier {
  kSuperBlock,      /**< Currently the only mode supported by the API */
  kInDriveGC,       /**< Reserved for future use */
  kVirtualSSD       /**< Reserved for future use */
} PACKED;

/**
 *  @ingroup    Enums
 */
enum SEFErrorRecoveryMode {
  kAutomatic,       /**< Automatic recovery mode */
  kHostControlled   /**< Host is responsible for recovery */
} PACKED;

/**
 *  @ingroup    Enums
 */
enum SEFDeadlineType {
  kFastest,     /**< Does not attempt a corrective action, but instead sends a notification
                     to allow higher layer to read from a separate redundant store. */
  kTypical,     /**< Attempts to perform basic error recovery in the event of a read error condition */
  kLong,        /**< Attempts to perform more advanced error recovery in the event of a read error condition */
  kHeroic       /**< Attempts to perform full recovery in the event of a read error condition */
} PACKED;

/* definition of bits in supported options field of SEFInfo struct below... */
#define kFragmentedSupported            (1 << 0) /**< Fragmented defect management type supported */
#define kPackedSupported                (1 << 1) /**< Packed defect management type supported */
#define kPerfectSupported               (1 << 2) /**< Perfect defect management type supported */
#define kMixedDefectManagementSupported (1 << 3) /**< Mixed defect management types supported */
#define kHostSerialNumberSupported      (1 << 4)
#define kCopyUserAddressRangeSupported  (1 << 5) /**< User address ranges supported for nameless copy */
#define kCopyFlashAddressListSupported  (1 << 6) /**< Flash address lists supported for nameless copy */
#define kSuperBlockSupported            (1 << 7) /**< SEFAPIIdentifier kSuperBlock is supported */
#define kInDriveGCSupported             (1 << 8) /**< SEFAPIIdentifier kInDriveGC is supported */
#define kVirtualSSDSupported            (1 << 9) /**< SEFAPIIdentifier kVirtualSSD is supported */
#define kAutomaticSupported             (1 << 10)/**< SEFErrorRecoveryMode kAutomatic is supported */
#define kHostControlledSupported        (1 << 11)/**< SEFErrorRecoveryMode kHostControlled is supported */
#define kStableLatencySupported         (1 << 12)
#define kStopSupported                  (1 << 13)
#define kPSLCSupported                  (1 << 14)/**< pSLC supported */
#define kFastestSupported               (1 << 15)/**< SEFDeadlineType kFastest is supported */
#define kTypicalSupported               (1 << 16)/**< SEFDeadlineType kTypical is supported */
#define kLongSupported                  (1 << 17)/**< SEFDeadlineType kLong is supported */
#define kHeroicSupported                (1 << 18)/**< SEFDeadlineType kHeroic is supported */
#define kIdleTimeSupported              (1 << 19)
#define kEncryptionSupported            (1 << 20)/**< Encryption supported */
#define kDeleteVirtualDeviceSupported   (1 << 21)/**< Deleting virtual devices supported */

/**
 *  @ingroup    CommonStructs
 */
struct SEFStatus {
  int32_t error;      /**< Status information */
  int32_t info;       /**< Additional context-based descriptive information */
};

typedef struct SEFHandle_ *SEFHandle;
typedef struct SEFVDHandle_ *SEFVDHandle;
typedef struct SEFQoSHandle_ *SEFQoSHandle;

/**
 *  @ingroup    CommonStructs
 */
struct SEFVirtualDeviceID {
  uint16_t id;
};

/**
 *  @ingroup    CommonStructs
 */
struct SEFQoSDomainID {
  uint16_t id;
};

/**
 *  @ingroup    CommonStructs
 */
struct SEFPlacementID {
  uint16_t id;
};

/**
 *  @ingroup    ApiManCmd
 *  @brief      Initializes the SEF Library, enumerates the SEF Units present,
 *              and returns the number of units found.
 *
 *  Every successful call to SEFLibraryInit() must be balanced with a call to
 *  SEFLibraryCleanup().
 *
 *  @see        SEFLibraryCleanup()
 *
 *  @return     Status and info summarizing result.
 *
 *  @retval     0     The info member returns the number of units
 */
struct SEFStatus SEFLibraryInit(void);

/**
 *  @ingroup    ApiManCmd
 *  @brief      Returns a handle to the SEF Unit at the specified index (zero based)
 *
 *  @param      index        Index of the SEF Unit
 *
 *  @return     Handle to the SEF Unit
 */
SEFHandle SEFGetHandle(uint16_t index);

/**
 *  @ingroup    ApiManCmd
 *  @brief      Performs cleanup of the SEF Library and releases resources.
 *
 *  Every successful call to SEFLibraryInit() must be balanced with a call to
 *  SEFLibraryCleanup().
 *
 *  @note       When the returned status error and info fields are zero, all
 *              open handles are closed, invalidated and are unusable.
 *
 *  @see        SEFLibraryInit()
 *
 *  @return     Status and info summarizing result.
 *
 *  @retval    0              The info field is the library's reference count.
 *  @retval    -ENODEV        The SEF Library was not initialized
 *  @retval    -EWOULDBLOCK   This function cannot be called on a callback thread
 */
struct SEFStatus SEFLibraryCleanup(void);

/**
 *  @ingroup    CommonStructs
 *
 */
struct SEFADUsize {
  uint32_t data;              /**< ADU data size in bytes */
  uint16_t meta;              /**< ADU meta data size in bytes */
  uint16_t reserved;          /**< Reserved/unused */
};

/**
 *  @ingroup    CommonStructs
 *
 */
struct SEFInfo {
  const char *name;             /**< Device Name from O/S */
  char vendor[8];               /**< Vendor field */
  char serialNumber[20];        /**< Device serial number */
  char FWVersion[8];            /**< Device firmware version */
  char HWVersion[8];            /**< Device hardware version */
  uint16_t unitNumber;          /**< Unit number of the SEFInfo struct */
  uint16_t APIVersion;          /**< API Version */
  uint64_t supportedOptions;    /**< Supported features - see kSupported defines */
  uint32_t maxOpenSuperBlocks;  /**< Firmware version specific, max number of open super blocks for the device.  When
                                     0, the limit is per Virtual Device instead.  @see SEFVirtualDeviceInfo */
  uint16_t maxQoSDomains;       /**< Hardware version specific, may be less than 65535 defined by architecture */
  uint16_t maxRootPointers;     /**< Firmware version specific, may be less than 8 defined by architecture */
  uint16_t maxPlacementIDs;     /**< Firmware version specific, max number of auto opened super blocks per QoS Domain */
  uint16_t reserved_0;          /**< Reserved/unused */
  uint16_t numReadQueues;       /**< Firmware version specific, max number of read queues total */
  uint16_t numVirtualDevices;   /**< Number of currently defined virtual devices */
  uint16_t numQoSDomains;       /**< Number of currently defined QoS Domains */
  uint16_t numBanks;            /**< Number of banks per channel */
  uint16_t numChannels;         /**< Number of channels per SEF Unit */
  uint16_t numPlanes;           /**< Number of planes per die */
  uint32_t pageSize;            /**< Physical page size */
  uint32_t numPages;            /**< Number of pages per block */
  uint32_t numBlocks;           /**< Number of blocks per die */
  uint32_t totalBandWidth;      /**< Total bandwidth in MiBs corresponding to the underlying flash component on this device */
  uint32_t readTime;            /**< Read time in microseconds corresponding to the underlying flash components on this device */
  uint32_t programTime;         /**< Program time in microseconds corresponding to the underlying flash components on this device */
  uint32_t eraseTime;           /**< Erase time in microseconds corresponding to the underlying flash components on this device */
  uint16_t minReadWeight;       /**< Advisory minimum read weight to allow timely house keeping internal I/O */
  uint16_t minWriteWeight;      /**< Advisory minimum write weight to allow timely house keeping internal I/O */
  uint32_t openExpirationPeriod;/**< Granularity in seconds for entire block */
  uint16_t reserved_1;          /**< Reserved/unused */
  uint16_t numADUSizes;         /**< Size of ADUsize array that follows at end of structure */
  struct SEFADUsize ADUsize[];  /**< Array of supported ADU sizes */
};

/**
 *  @ingroup    ApiManCmd
 *  @brief      Gets device information.
 *
 *  Returns ADU size(s), number of channels, number of dies, and other
 *  associated information.  Dynamic values are refreshed just before the
 *  structure is returned.
 *
 *  @param      sefHandle                Handle to the SEF Unit
 *
 *  @return     SEFInfo struct or NULL if sefHandle is NULL.
 */
const struct SEFInfo *SEFGetInformation(SEFHandle sefHandle) NONNULL(1);

/**
 *  @ingroup    CommonStructs
 */
struct SEFVirtualDeviceList {
  uint16_t numVirtualDevices;                   /**< Number of virtual devices */
  struct SEFVirtualDeviceID virtualDeviceID[];  /**< An Array of all Virtual device IDs */
};

/**
 *  @ingroup    ApiManCmd
 *  @brief      Returns a list of the defined Virtual Devices.
 *
 *  When list is NULL or insufficiently sized or bufferSize is 0, status.info
 *  returns the minimum buffer size for the complete list. The data that fits
 *  in an insufficiently sized buffer is valid but incomplete. The buffer must
 *  be at least the size of the list structure.
 *
 *  @param      sefHandle                Handle to the SEF Unit
 *  @param[out] list                     Buffer for storing list of Virtual Devices
 *  @param      bufferSize               Buffer size
 *
 *  @return     Status and info summarizing result.
 *
 *  @retval    -ENODEV        The SEF Handle is not valid
 *  @retval    -EINVAL        The function parameter is not valid; info returns the parameter index that is not valid
 *  @retval    0              info field returns the minimum buffer size if the buffer is insufficient or NULL; otherwise, 0
 */
struct SEFStatus SEFListVirtualDevices(SEFHandle sefHandle, struct SEFVirtualDeviceList *list,
                                      size_t bufferSize) NONNULL(1);

/**
 *  @ingroup    CommonStructs
 */
struct SEFQoSDomainList {
  uint16_t numQoSDomains;               /**< Number of QoS domains */
  struct SEFQoSDomainID QoSDomainID[];  /**< An Array of all QoS Domain IDs */
};

/**
 *  @ingroup    ApiManCmd
 *  @brief      Returns a list of the defined QoS Domains.
 *
 *  When list is NULL or insufficiently sized or bufferSize is 0, status.info
 *  returns the minimum buffer size for the complete list. The data that fits
 *  in an insufficiently sized buffer is valid but incomplete. The buffer must
 *  be at least the size of the list structure.
 *
 *  @param      sefHandle                Handle to the SEF Unit
 *  @param[out] list                     Buffer for storing list of QoS Domains
 *  @param      bufferSize               Buffer size
 *
 *  @return     Status and info summarizing result.
 *
 *  @retval    -ENODEV        The SEF Handle is not valid
 *  @retval    -EINVAL        The function parameter is not valid; info returns the parameter index that is not valid
 *  @retval    0              info field returns the minimum buffer size if the buffer is insufficient or NULL; otherwise, 0
 */
struct SEFStatus SEFListQoSDomains(SEFHandle sefHandle, struct SEFQoSDomainList *list,
                                   size_t bufferSize) NONNULL(1);

/**
 *  @ingroup    CommonStructs
 *  @brief      Structure of SEFUserAddress may be redefined by user.
 *
 *  The limitations for redefining the structure are:
 *  1. size must be 8 bytes
 *  2. multi-adu writes will auto increment the LBA value and must not
 *     equal SEFUserAddressIgnore.  However SEFUserAddressIgnore is supported
 *     as a starting user address.
 *
 *  For kSuperBlock, the LBA is limited to 40 bits and the meta to 24.
 *  The unformatted member is in little endian format.
 *
 */
struct SEFUserAddress {
  uint64_t unformatted;
};

/**
 *  @ingroup    CommonStructs
 *  @brief      Number of bits in a user address lba value
 **/
#define SEFUserAddressLbaBits 40

/**
 *  @ingroup    CommonStructs
 *  @brief      Number of bits in a user address meta value
 **/
#define SEFUserAddressMetaBits (64-SEFUserAddressLbaBits)

/**
 *  @ingroup    ApiManCmd
 *
 *  @param      userAddress           User address to be parsed
 *
 *  @return     Returns meta value from a user address
 **/
static inline uint32_t SEFGetUserAddressMeta(struct SEFUserAddress userAddress)
{
    return ((uint32_t) (le64toh(userAddress.unformatted) >> SEFUserAddressLbaBits));
}

/**
 *  @ingroup    ApiManCmd
 *
 *  @param      userAddress           User address to be parsed
 *
 *  @return     Returns LBA value from a user address
 **/
static inline uint64_t SEFGetUserAddressLba(struct SEFUserAddress userAddress)
{
    return (le64toh(userAddress.unformatted) & ((UINT64_C(1) << SEFUserAddressLbaBits)-1));
}

/**
 *  @ingroup    ApiManCmd
 *  @brief      Return LBA and meta values from a user address
 *
 *  @param      userAddress           User address to be parsed
 *  @param[out] lba                   Lba parsed from the user address
 *  @param[out] meta                  Meta parsed from the user address
 **/
static inline void SEFParseUserAddress(struct SEFUserAddress userAddress, uint64_t *lba, uint32_t *meta)
{
  *lba = SEFGetUserAddressLba(userAddress);
  *meta = SEFGetUserAddressMeta(userAddress);
}

/**
 *  @ingroup    ApiManCmd
 *  @brief      Creates a user address from lba and meta values
 *
 *  @param      lba           lba to be used to generate user address (40 bits)
 *  @param      meta          meta to be used to generate user address (24 bits)
 *
 *  @return     Returns the user address created from lba and meta values
 **/
static inline struct SEFUserAddress SEFCreateUserAddress(uint64_t lba, uint32_t meta)
{
  return (struct SEFUserAddress) {
            htole64(((uint64_t) meta << SEFUserAddressLbaBits) |
                     (lba & ((UINT64_C(1) << SEFUserAddressLbaBits)-1)))};
}

/**
 *  @ingroup     CommonStructs
 *  @brief       Opaque flash address value parsable by SEFParseFlashAddress()
 */
struct SEFFlashAddress {
  uint64_t bits;
};

#if defined(_MSC_VER)
static inline struct SEFFlashAddress _int2fa(uint64_t v) {return {v};}
#define SEFAutoAllocate _int2fa(UINT64_C(0xffffffffffffffff))
#define SEFAutoAllocatePSLC _int2fa(htole64(UINT64_C(0xfffffffffffffffe)))

static inline struct SEFUserAddress _int2ua(uint64_t v) {return {v};}
#define SEFUserAddressIgnore _int2ua(UINT64_C(0xffffffffffffffff))

#define SEFNullFlashAddress _int2fa((int64_t)0x0)
#else
/**
 *  @ingroup     CommonStructs
 *  @brief       Flash address value to indicate device should allocate the super
 *               block from standard FLASH while doing a write
 *
 *  @see         SEFWriteWithoutPhysicalAddress()
 */
#define SEFAutoAllocate ((struct SEFFlashAddress) {UINT64_C(0xffffffffffffffff)})

/**
 *  @ingroup     CommonStructs
 *  @brief       Flash address value to indicate device should allocate the super
 *               block from pSLC while doing a write
 *
 *  @see         SEFWriteWithoutPhysicalAddress()
 */
#define SEFAutoAllocatePSLC ((struct SEFFlashAddress) { \
  htole64(UINT64_C(0xfffffffffffffffe))})

/**
 *  @ingroup     CommonStructs
 *  @brief       User address value to indicate it should not be validated by
 *               the SEF device
 *
 *  @see         SEFReadWithPhysicalAddress()
 */
#define SEFUserAddressIgnore ((struct SEFUserAddress) {UINT64_C(0xffffffffffffffff)})

/**
 *  @ingroup     CommonStructs
 *  @brief       Flash address value indicating empty
 */
#define SEFNullFlashAddress ((struct SEFFlashAddress){(int64_t)0x0})
#endif

/**
 *  @ingroup     CommonStructs
 *  @brief       Checks whether the flash address is null
 *
 *  @param       flashAddress            The opaque address to be checked
 *
 *  @return      Returns 1 if the flashAddress is null
 */
static inline int SEFIsNullFlashAddress(struct SEFFlashAddress flashAddress)
{
    return (flashAddress.bits == SEFNullFlashAddress.bits);
}

/**
 *  @ingroup     CommonStructs
 *  @brief       Checks whether two flash addresses are equal
 *
 *  @param       flashAddress1            The opaque address to be compared
 *  @param       flashAddress2            The opaque address to be compared
 *
 *  @return      Returns 1 if the flashAddress1 equals flashAddress2
 */
static inline int SEFIsEqualFlashAddress(struct SEFFlashAddress flashAddress1, struct SEFFlashAddress flashAddress2)
{
    return (flashAddress1.bits == flashAddress2.bits);
}

/**
 *  @ingroup     CommonStructs
 *  @brief       Returns the next flash address by incrementing the ADU Offset
 *
 *  Doesn't guarantee that the returned flash address is valid
 *
 *  @param      qosHandle        Handle to a QoS Domain to interpret/parse the
 *                               flash address.
 *  @param      flashAddress     The opaque address to be incremented
 *
 *  @return      Returns the next flash address if the qosHandle is valid,
 *               otherwise it returns SEFNullFlashAddress.
 */
struct SEFFlashAddress SEFNextFlashAddress(SEFQoSHandle qosHandle,
                                           struct SEFFlashAddress flashAddress) NONNULL(1);

/**
 *  @ingroup     Enums
 *  @brief       Asynchronous notifications from SEF
 */
enum SEFNotificationType {
  kAddressUpdate,           /**< The flash address has changed */
  kUnflushedData,           /**< The super block data was flushed to the Flash Memory */
  kRequirePatrol,           /**< The super block requires to be patrolled; A list of super blocks requiring patrol can be retrieved using SEFGetCheckList  */
  kRequireMaintenance,      /**< The super block requires maintenance; In other words, the data should be copied off and the super block should be freed */
  kReducedCapacity,         /**< The Virtual Device's capacity has been reduced */
  kUnreadableData,          /**< The data stored at the flash address cannot be read */
  kSuperBlockStateChanged,  /**< The super block's state has changed */
  kOutOfCapacity,           /**< The Virtual Device is full */
  kOutOfPSLCCapacity,       /**< The Virtual Device is out of pSLC */
  kBufferRelease,           /**< The buffer pointed to by iov can be freed */
} PACKED;

/**
 *  @ingroup    EventsStructs
 *  @brief      This event is issued at the QoS Domain level.
 */
struct SEFQoSNotification {
  enum SEFNotificationType type;                    /**< See union below... */
  uint8_t reserved_0[5];                            /**< Reserved, must be initialized to zero */
  struct SEFQoSDomainID QoSDomainID;                /**< QoSDomainID for this notification */
  union {
    //! \unnamed{union:7}
    struct SEFFlashAddress maintenanceFlashAddress; /**< Valid when type is kRequireMaintenance */
    struct {
      //! \unnamed{struct:3}
      struct SEFUserAddress changedUserAddress;     /**< User address that moved */
      struct SEFFlashAddress oldFlashAddress;       /**< Old flash address */
      struct SEFFlashAddress newFlashAddress;       /**< New flash address */
    };                                              /**< Valid when type is kAddressUpdate */
    struct SEFFlashAddress patrolFlashAddress;      /**< Valid when type is kRequirePatrol */
    struct {
      //! \unnamed{struct:2}
      struct SEFUserAddress unflushedUserAddress;   /**< Affected user address */
      char *userData;                               /**< Pointer to buffered data */
    };                                              /**< Valid when type is kUnflushedData */
    struct SEFFlashAddress unreadableFlashAddress;  /**< Valid when type is kUnreadable */
    struct {
      //! \unamed{struct:3}
      struct SEFFlashAddress changedFlashAddress;   /**< Valid when type is kSuperBlockStateChanged (open=>closed) */
      uint32_t writtenADUs;                         /**< Number of ADUs written by user i/o commands to the super block */
      uint32_t numADUs;                             /**< Capacity of the super block in ADUs */
    };
    struct {
      //! \unnamed{struct:2}
      const struct iovec *iov;                      /**< A pointer to the scatter gather list */
      int16_t iovcnt;                               /**< The number of elements in the scatter gather list */
    };                                              /**< Valid when type is kBufferRelease */
  };                                                /**< Notification data */
};

/**
 *  @ingroup    EventsStructs
 *  @brief      This event indicates to the host that it should respond in some
 *              appropriate manner to the reduced capacity condition.
 *
 * This event is issued at the Virtual Device level.  Due to failure of blocks,
 * actual available capacity may fall below the allocated capacity of the
 * attached QoS Domains. The host should take action to release super blocks
 * back to the Virtual Device's free pool before it is entirely consumed.
 */
struct SEFVDNotification {
  enum SEFNotificationType type;             /**< Is kReducedCapacity, kOutOfCapacity or
                                                  kOutOfPSLCCapacity */
  uint8_t reserved_0;                        /**< Reserved, must be initialized to zero */
  struct SEFVirtualDeviceID virtualDeviceID; /**< Virtual Device for this notification */
  uint32_t numADUs;                          /**< kReducedCapacity - Amount of space that is no longer available */
};

/*
 * Management operations associated with device control/configuration
 */

/**
 *  @ingroup    CommonStructs
 */
struct SEFDieList
{
  uint16_t numDies;   /**< Number of dies in dieIDs */
  uint16_t dieIDs[];  /**< List of dies by ID */
};


/**
 *  @ingroup    CommonStructs
 *  @brief      Relative die time weights for write type of I/O operations
 */
struct SEFWeights {
  uint16_t programWeight; /**< Default weight for a program operation by the
                               Nameless Write and Nameless Copy commands */
  uint16_t eraseWeight;   /**< Default weight for an erase operation by SEFAllocateSuperBlock,
                               SEFFlushSuperBlock and SEFCloseSuperBlock */
};

/**
 *  @ingroup    CommonStructs
 */
struct SEFVirtualDeviceConfig
{
  struct SEFVirtualDeviceID virtualDeviceID;  /**< Virtual Device ID */
  uint8_t numReadQueues;                      /**< Number of read queues to define
                                                   for this Virtual Device */
  uint8_t reserved;                           /**< Reserved, must be initialized to zero */
  uint16_t readWeights[SEFMaxReadQueues];     /**< Default weight for read operations
                                                   for each possible read queue */
  uint16_t superBlockDies;                    /**< Number of dies in a super block, 0 uses dieList.numDies */
  struct SEFDieList dieList;                  /**< List of dies in ascending order for the Virtual Device */
};

/**
 *  @ingroup    ApiManCmd
 *  @brief      Creates the Virtual Devices and allocates physical resources.
 *
 *  Configuring the virtual devices for a SEF Unit is only done during
 *  pre-production.  Once the flash of a SEF Unit has been written to, it is
 *  not possible to change the Virtual Device configuration.
 *
 *  Configuration is accomplished by supplying a array of pointers to
 *  virtualDeviceConfigs. Each Virtual Device being configured will have a
 *  single array entry.  Each of those entries contains a list of die IDs that
 *  will define a specific Virtual Device.  The superBlockDies in the config
 *  must be 0 or evenly divide into the number of dies specified by the die
 *  list.
 *
 *  Valid die IDs start at 0 and are less than the total number of dies in a
 *  SEF Unit. The total number of dies is equal to SEFInfo::numBanks *
 *  SEFInfo::numChannels. The die ID of a die at channel CH, bank BNK, is equal
 *  to CH + BNK*SEFInfo::numChannels.  A die ID can only be used in at most one
 *  Virtual Device configuration.  If a die is not included in any Virtual
 *  Device configuration, it will be lost capacity that cannot be used.
 *
 *  @see        SEFGetInformation()
 *
 *  @param      sefHandle            Handle to the SEF Unit
 *  @param      numVirtualDevices    Number of entries in virtualDeviceConfigs
 *  @param      virtualDeviceConfigs Pointers to configurations describing how
 *                                      to create the virtual devices
 *
 *  @return     Status and info summarizing result. Returns 0 on success and negative value on error.
 *
 *  @retval    -ENODEV           The SEF Handle is not valid
 *  @retval    -EINVAL           The function parameter is not valid; info returns the parameter index that is not valid
 *  @retval    -EACCES           You don't have the needed permission to perform this operation
 */
struct SEFStatus SEFCreateVirtualDevices(SEFHandle sefHandle, uint16_t numVirtualDevices,
                      struct SEFVirtualDeviceConfig * const virtualDeviceConfigs[]) NONNULL(1);


/**
 *  @ingroup    ApiManCmd
 *  @brief Sets the number of pSLC super blocks
 *
 *  This defines the number of regular super blocks which are transformed to
 *  use as pSLC super blocks.  Because it applies to all the dies in the Virtual
 *  Device, the value must be a multiple of the ratio of the number of dies in
 *  the Virtual Device to the number of configured dies per super block.
 *
 *  Once super blocks have been allocated from the Virtual Device, it may not
 *  be possible to modify the number of pSLC super blocks and the call will fail
 *  with -ENOSPC.
 *
 *  @param vdHandle           Handle to the SEF Unit
 *  @param numPSLCSuperBlocks The number of pSLC super blocks to set
 *  @retval 0                 The number of pSLC super blocks has been set
 *  @retval -ENODEV           The SEF Handle is not valid
 *  @retval -ENOSPC           No space is available for pSLC super blocks
 *  @retval -EINVAL           The function parameter is not valid; info returns
 *                            the parameter index that is not valid.
 */
struct SEFStatus SEFSetNumberOfPSLCSuperBlocks(SEFVDHandle vdHandle, uint32_t numPSLCSuperBlocks) NONNULL(1);

/**
 *  @ingroup    CommonStructs
 */
struct SEFVirtualDeviceUsage {
  uint32_t eraseCount;                      /**< Count of super blocks erased.  Used to populate
                                                 eraseOrder in SEFSuperBlockInfo */
  uint32_t numUnallocatedSuperBlocks;       /**< Number of unallocated super blocks */
  uint32_t numSuperBlocks;                  /**< Number of allocated super blocks */
  uint32_t numUnallocatedPSLCSuperBlocks;   /**< Number of unallocated pSLC super blocks */
  uint32_t numPSLCSuperBlocks;              /**< Number of allocated pSLC super blocks */
  struct SEFVirtualDeviceID vdID;           /**< Virtual device ID of the handle */
  uint8_t averagePEcount;                   /**< Average program/erase count */
  uint8_t maxPEcount;                       /**< Max program/erase count */
  uint16_t patrolCycleTime;                 /**< Recommended Patrol Cycle in minutes */
  uint16_t reserved;                        /**< Reserved, must be initialized to zero */
};

/**
 *  @ingroup    ApiManCmd
 *  @brief      Returns Virtual Device usage.
 *
 *  @param      vdHandle             Handle to the Virtual Device
 *  @param[out] usage                Buffer for storing VD usage
 *
 *  @return     Status and info summarizing result.
 *
 *  @retval    -ENODEV        The Virtual Device Handle is not valid
 *  @retval    -EPERM         The Virtual Device Handle is not open
 */
struct SEFStatus SEFGetVirtualDeviceUsage(SEFVDHandle vdHandle, struct SEFVirtualDeviceUsage *usage) NONNULL(1,2);

/**
 *  @ingroup  CommonStructs
 *  @brief    Configuration for Erase/Program suspend
 *
 *  The weights supplied with i/o represents virtual time.  These parameters
 *  control how often, and for how long an erase/program can be interrupted by
 *  reads.
 */
struct SEFVirtualDeviceSuspendConfig
{
  uint32_t maxTimePerSuspend;   /*< Read will issued within this time.  When 0,
                                    the number of read command is unlimited.
                                    When larger than the device defined maximum
                                    value, the device defined value is used. */
  uint32_t minTimeUntilSuspend; /*< A suspend starts when the cumulated weights
                                    of pending reads exceeds this value.  When 0,
                                    the suspend will start immediately for a
                                    pending read. */
  uint32_t maxSuspendInterval;  /*< Suspend starts for a pending read command
                                    after this interval since the last resume
                                    (or start programming/erase).  When larger
                                    than the device defined minimum value, the
                                    device defined value is used. */
};

/**
 *  @ingroup    CommonStructs
 */
struct SEFVirtualDeviceInfo {
  uint64_t flashCapacity;                   /**< Flash capacity in 4k ADUs */
  uint64_t flashAvailable;                  /**< Available flash capacity in 4k ADUs */
  uint64_t pSLCFlashCapacity;               /**< pSLC Flash capacity in 4k ADUs */
  uint64_t pSLCFlashAvailable;              /**< pSLC Available flash capacity in 4k ADUs */
  uint32_t superBlockCapacity;              /**< Super block capacity in 4k ADUs */
  uint32_t pSLCSuperBlockCapacity;          /**< pSLC super block capacity in 4k ADUs */
  uint32_t maxOpenSuperBlocks;              /**< Maximum number of open super blocks per Virtual Device.  When 0,
                                                 the limit is per device instead.  See SEFInfo */
  uint32_t numPSLCSuperBLocks;              /**< Number of pSLC super blocks */
  struct SEFVirtualDeviceSuspendConfig suspendConfig; /* Configuration for how erase/program
                                                 are suspended for reads */
  uint16_t superBlockDies;                  /**< Number of dies used for a super block */
  uint8_t  aduOffsetBitWidth;               /**< Number of bits that make up the
                                                 adu offset in a flash address */
  uint8_t  superBlockIdBitWidth;            /**< Number of bits that make up the
                                                 super block id in a flash address */
  uint16_t readWeights[SEFMaxReadQueues];   /**< Default weight for read operations
                                                 for each possible read queue */
  uint8_t numReadQueues;                    /**< Number of read queues defined for the Virtual Device */
  uint8_t reserved[5];                      /**< Reserved, must be initialized to zero */
  struct SEFQoSDomainList QoSDomains;       /**< List of domains */
};

/**
 *  @ingroup    ApiManCmd
 *  @brief      Returns Virtual Device die list.
 *
 *  When list is NULL or insufficiently sized or bufferSize is 0, status.info
 *  returns the minimum buffer size for the complete list. The data that fits
 *  in an insufficiently sized buffer is valid but incomplete. The buffer must
 *  be at least the size of the list structure.
 *
 *  @param      sefHandle            Handle to the SEF Unit
 *  @param      virtualDeviceID      Virtual Device ID
 *  @param[out] list                 Buffer for storing VD information
 *  @param      bufferSize           Buffer size
 *
 *  @return     Status and info summarizing result.
 *
 *  @retval    -ENODEV      The SEF Handle is not valid
 *  @retval    -EINVAL      The function parameter is not valid; info returns the parameter index that is not valid
 *  @retval    0            info field returns the minimum buffer size if the buffer is insufficient or NULL; otherwise, 0
 */
struct SEFStatus SEFGetDieList(SEFHandle sefHandle, struct SEFVirtualDeviceID virtualDeviceID,
                                                struct SEFDieList *list, size_t bufferSize) NONNULL(1);

/**
 *  @ingroup    ApiManCmd
 *  @brief      Returns Virtual Device information.
 *
 *  When info is NULL or insufficiently sized or bufferSize is 0, status.info
 *  returns the minimum buffer size for the complete set of information. The
 *  data that fits in an insufficiently sized buffer is valid but incomplete.
 *  The buffer must be at least the size of the info structure.
 *
 *  @param      sefHandle            Handle to the SEF Unit
 *  @param      virtualDeviceID      Virtual Device ID
 *  @param[out] info                 Buffer for storing VD information
 *  @param      bufferSize           Buffer size
 *
 *  @return     Status and info summarizing result.
 *
 *  @retval    -ENODEV      The SEF Handle is not valid
 *  @retval    -EINVAL      The function parameter is not valid; info returns the parameter index that is not valid
 *  @retval    0            info field returns the minimum buffer size if the buffer is insufficient or NULL; otherwise, 0
 */
struct SEFStatus SEFGetVirtualDeviceInformation(SEFHandle sefHandle, struct SEFVirtualDeviceID virtualDeviceID,
                                                struct SEFVirtualDeviceInfo *info, size_t bufferSize) NONNULL(1);

/**
 *  @ingroup    ApiManCmd
 *  @brief Sets the suspend configuration for a Virtual Device
 *
 *  @param vdHandle           Handle to the SEF Unit
 *  @param config             Suspend configuration to set
 *  @retval 0                 The suspend configuration has been set
 *  @retval -ENODEV           The SEF Handle is not valid
 *  @retval -EINVAL           The function parameter is not valid; info returns
 *                            the parameter index that is not valid.
 */
struct SEFStatus SEFSetVirtualDeviceSuspendConfig(SEFVDHandle vdHandle,
                    const struct SEFVirtualDeviceSuspendConfig *config) NONNULL(1);

/**
 *  @ingroup    CommonStructs
 */
struct SEFQoSDomainCapacity {
  uint64_t flashCapacity;     /**< Number of ADUs to assign to a QoS Domain */
  uint64_t flashQuota;        /**< Maximum number of ADUs allowed for a QoS Domain */
};

/**
 *  @ingroup    ApiManCmd
 *  @brief      Attempts to create a QoS Domain in the specified Virtual Device.
 *
 *  Returns an error when the target Virtual Device doesn’t have enough flash
 *  memory space. The actual flash capacity reserved in the
 *  Virtual Device is typically larger than what was requested by flashCapacity.
 *
 *  @see        SEFGetInformation()
 *
 *  @param      vdHandle             Handle to the Virtual Device
 *  @param[out] QoSDomainID          Assigned QoS Domain ID.
 *  @param      flashCapacity        Number of required/reserved/maximum ADUs regular flash
 *  @param      pSLCFlashCapacity    Number of required/reserved/maximum ADUs pSLC flash
 *  @param      ADUindex             Index into the ADUSize[] array in SEFInfo
 *                                   returned by SEFGetInformation() to select
 *                                   the data and metadata sizes of an ADU.
 *  @param      api                  Specifies the API Identifier for this QoS Domain
 *  @param      defectStrategy       Specifies the defect management strategy for the QoS Domain
 *  @param      recovery             Specifies the recovery mode for this QoS Domain
 *  @param      encryptionKey        NULL for disabled.
 *  @param      numPlacementIDs      The maximum number of Placement IDs that
 *                                   can be placed on the QoS Domain.
 *  @param      maxOpenSuperBlocks   The maximum number super blocks that can be
 *                                   open in a QoS Domain.  If less than numPlacementIDs
 *                                   it will be set to numPlacementIDs+2. This
 *                                   affects resource/memory usage in the device.
 *  @param      defaultReadQueue     The default read queue assignment, 0 through
 *                                   numReadQueues-1 defined for the Virtual Device.
 *  @param      weights              Weight values for each type of write I/O
 *                                   operations.
 *
 *  @return     Status and info summarizing result.
 *
 *  @retval    -ENODEV      The Virtual Device Handle is not valid
 *  @retval    -EPERM       The Virtual Device Handle is not open
 *  @retval    -EINVAL      The function parameter is not valid; info returns the parameter index that is not valid
 *  @retval    -ENOMEM      The library was unable to allocate needed structures.  status.info is set to the type
 *                          of capacity that caused the failure (0 for kForWrite, 1 for kForPSLCWrite, 2 for
 *                          QoSD max)
 */
struct SEFStatus SEFCreateQoSDomain(SEFVDHandle vdHandle, struct SEFQoSDomainID *QoSDomainID,
                                    struct SEFQoSDomainCapacity *flashCapacity,
                                    struct SEFQoSDomainCapacity *pSLCFlashCapacity,
                                    int ADUindex, enum SEFAPIIdentifier api,
                                    enum SEFDefectManagementMethod defectStrategy,  enum SEFErrorRecoveryMode recovery,
                                    const char *encryptionKey, uint16_t numPlacementIDs,  uint16_t maxOpenSuperBlocks,
                                    uint8_t defaultReadQueue, struct SEFWeights weights) NONNULL(1,2);

/**
 *  @ingroup     Enums
 */
enum SEFSuperBlockType {
  kForWrite,    /**< Super block is for writes */
  kForPSLCWrite /**< Super block is for pSLC writes */
} PACKED;

/**
 *  @ingroup    ApiManCmd
 *  @brief      Resets the capacity of a QoS Domain
 *
 *  Sets a new capacity and quota for the QoS Domain. When the flashQuota is
 *  less than the flashCapacity or the used flashedCapacity, it will be set to
 *  the larger of the two.
 *
 *  @param      vdHandle         Handle to the Virtual Device
 *  @param      QoSDomainID      QoS Domain ID
 *  @param      type             Type of super block
 *  @param      capacity         Number of required/reserved/maximum ADUs the flash type
 *
 *  @return     Status and info summarizing result.
 *
 *  @retval    -ENODEV      The Virtual Device Handle is not valid
 *  @retval    -EPERM       The Virtual Device Handle is not open
 *  @retval    -EINVAL      The function parameter is not valid; info returns the parameter index that is not valid
 *  @retval    -ENOSPC      The Virtual Device does not have enough space
 */
struct SEFStatus SEFSetQoSDomainCapacity(SEFVDHandle vdHandle, struct SEFQoSDomainID QoSDomainID,
                                         enum SEFSuperBlockType type, struct SEFQoSDomainCapacity *capacity) NONNULL(1);

/**
 *  @ingroup    ApiManCmd
 *  @brief      Sets the value of a QoSDomain root pointer.
 *
 *  A root pointer may be set to any value. Root pointer values are read back
 *  using SEFGetQoSDomainInformation().  When a root pointer is set to a flash
 *  address that is valid for the QoS Domain it's stored in, the ADU it points to
 *  can be read by SEFReadWithPhysicalAddress() using a flash address of just
 *  the root pointer index as the ADU offset with zeros for the QoS DomainId
 *  and super block index.
 *
 *  @see        SEFReadWithPhysicalAddress()
 *
 *  @param      qosHandle        Handle to the QoS Domain
 *  @param      index            The index of the root pointer
 *  @param      value            Value of the pointer
 *
 *  @return     Status and info summarizing result.
 *
 *  @retval    -ENODEV      The QoS Domain handle is not valid
 *  @retval    -EPERM       The QoS Domain Handle is not open
 *  @retval    -EINVAL      The function parameter is not valid; info returns the parameter index that is not valid
 */
struct SEFStatus SEFSetRootPointer(SEFQoSHandle qosHandle, int index, struct SEFFlashAddress value) NONNULL(1);

/**
 *  @ingroup    ApiManCmd
 *  @brief      Sets target QoS Domain's read deadline policy.
 *
 *  @see        SEFVirtualDeviceInfo
 *
 *  @param      qosHandle        Handle to the QoS Domain
 *  @param      deadline         Deadline type for this QoS Domain
 *
 *  @return     Status and info summarizing result.
 *
 *  @retval    -ENODEV      The QoS Domain handle is not valid
 *  @retval    -EPERM       The QoS Domain Handle is not open
 */
struct SEFStatus SEFSetReadDeadline(SEFQoSHandle qosHandle, enum SEFDeadlineType deadline) NONNULL(1);

/**
 *  @ingroup    ApiManCmd
 *  @brief      Sets target QoS Domain's default program and erase weights.
 *
 *  @see        SEFQoSDomainInfo
 *
 *  @param      qosHandle        Handle to the QoS Domain
 *  @param      weights          Default program and erase weights for this QoS Domain
 *
 *  @return     Status and info summarizing result.
 *
 *  @retval    -ENODEV      The QoS Domain handle is not valid
 *  @retval    -EPERM       The QoS Domain Handle is not open
 */
struct SEFStatus SEFSetWeights(SEFQoSHandle qosHandle, struct SEFWeights weights) NONNULL(1);

/**
 *  @ingroup     Enums
 */
enum SEFSuperBlockState {
  kSuperBlockClosed = 1,        /**< This is the state of super blocks which retain effective
                                     data after all super pages have been programmed */
  kSuperBlockOpenedByErase,     /**< This is the state of super blocks in the middle of being programmed
                                     and were allocated by SEFAllocateSuperBlock() */
  kSuperBlockOpenedByPlacementId, /**< This is the state of super blocks in the middle of being programmed
                                       and were allocated automatically by placement id */
} PACKED;

/**
 * @ingroup Enums
 * @brief   Integrity of a super block
 */
enum SEFDataIntegrity {
  kSefIntegretyUnknown,   /**< The block needs to be patrolled */
  kSefIntegretyGood,      /**< Reading the block requires little to no error correction */
  kSefIntegretyAllowable, /**< Reading the block requires an acceptable amount of error correction */
  kSefIntegretyMarginal,  /**< The data in the block needs to be relocated */
} PACKED;

#define SEFPlacementIdUnused (0xffff)

/**
 *  @ingroup    CommonStructs
 */
struct SEFSuperBlockInfo {
  struct SEFFlashAddress flashAddress; /**< Flash address where this super block resides */
  uint32_t eraseOrder;                /**< Indication of when a super block was erased.
                                           Can be used to determine the order blocks were
                                           allocated or to version a super block. Values
                                           only increase over time and are unique at the
                                           Virtual Device level */
  uint32_t writableADUs;              /**< For a fresh, unwritten, open super block,
                                           this how much QoS Domain quota is being
                                           used by the super block.  It will decrease
                                           if defects are encountered while writing */
  uint32_t writtenADUs;               /**< This field increases as ADUs in the super block are written.
                                           For kPerfect and kPacked, it will equal writableADUs when
                                           the block is closed.  For kFragmented, it will equal
                                           super block capacity because it includes defective portions
                                           of the flash */
  struct SEFPlacementID placementID;  /**< When auto-allocated, indicates the placement id
                                           supplied to SEFWriteWithoutPhysicalAddress().
                                           Otherwise it will be SEFPlacementIdUnused */
  uint16_t numDefects;                /**< Number of defective planes per super page.
                                           This may increase as the super block is
                                           written */
  uint16_t timeLeft;                  /**< Time in minutes left to handle an integrity
                                           that is not kIntegrityGood before risking
                                           data loss */
  uint8_t PEIndex;                    /**< This is the block's erase count normalized
                                           to be between 0 and 255 */
  enum SEFSuperBlockType type;        /**< This is the type of the super block, normal or pSLC */
  enum SEFSuperBlockState state;      /**< This is the block's current state */
  enum SEFDataIntegrity integrity;    /**< This is the integrity of the super block,
                                           If not kIntegrityGood, the super block
                                           requires a SEFCheckSuperBlock to patrol
                                           or refresh */
  uint8_t defects[];                  /**< This is a bitmap indicating which
                                           planes are defective.
                                           SEFQoSDomainInfo::defectMapSize is the
                                           size of this field. */
};

/**
 *  @ingroup    CommonStructs
 *  @brief Entry in a SEFSuperBlockList
 */
struct SEFSuperBlockRecord {
  struct SEFFlashAddress flashAddress; /**< Flash address where this super block resides */
  uint8_t reserved[6];                 /**< Reserved */
  uint8_t PEIndex;                     /**< This is the block's erase count normalized
                                            to be between 0 and 255 */
  enum SEFSuperBlockState state;       /**< This is the block's current state */
};

/**
 *  @ingroup    CommonStructs
 */
struct SEFSuperBlockList {
  uint32_t numSuperBlocks;                          /**< Number of super blocks in use by the QoS Domain */
  uint32_t reserved;                                /**< Reserved */
  struct SEFSuperBlockRecord superBlockRecords[];   /**< List of super block records */
};

/**
 *  @ingroup    ApiManCmd
 *  @brief      Returns a list of super blocks assigned to the QoS Domain.
 *
 *  When list is NULL or insufficiently sized or bufferSize is 0, status.info
 *  returns the minimum buffer size for the complete list. The data that fits
 *  in an insufficiently sized buffer is valid but incomplete. The buffer must
 *  be at least the size of the list structure.
 *
 *  @param      qosHandle        Handle to the QoS Domain
 *  @param[out] list             List of super block records
 *  @param      bufferSize       Buffer size
 *
 *  @return     Status and info summarizing result.
 *
 *  @retval    -ENODEV      The QoS Domain handle is not valid
 *  @retval    -EPERM       The QoS Domain Handle is not open
 *  @retval    -EINVAL      The function parameter is not valid; info returns the parameter index that is not valid
 *  @retval    0            info field returns the minimum buffer size if the buffer is insufficient or NULL; otherwise, 0
 */
struct SEFStatus SEFGetSuperBlockList(SEFQoSHandle qosHandle, struct SEFSuperBlockList *list,
                                      size_t bufferSize) NONNULL(1);

/**
 *  @ingroup    CommonStructs
 */
struct SEFQoSDomainInfo {
  struct SEFVirtualDeviceID virtualDeviceID; /**< Virtual device ID */
  uint16_t numPlacementIDs;               /**< Specifies the number of Placement IDs corresponding to this QoS Domain */
  uint8_t encryption;                     /**< 0 for disabled, non-zero for enabled */
  enum SEFErrorRecoveryMode recoveryMode; /**< Specifies the recovery mode for this QoS Domain */
  enum SEFDefectManagementMethod defectStrategy; /**<  Defect management strategy for the QoS Domain */
  enum SEFAPIIdentifier api;              /**< Specifies the API Identifier for this QoS Domain */
  uint64_t flashCapacity;                 /**< Reserved capacity of the QoS Domain in QoS Domain ADUs */
  uint64_t flashQuota;                    /**< Number of QoS Domain ADUs that can be allocated by the QoS Domain */
  uint64_t flashUsage;                    /**< Number of QoS Domain ADUs allocated by the QoS Domain*/
  uint64_t pSLCFlashCapacity;             /**< Reserved pSLC capacity of the QoS Domain in QoS Domain ADUs */
  uint64_t pSLCFlashQuota;                /**< Number of pSLC QoS Domain ADUs that can be allocated by the QoS Domain */
  uint64_t pSLCFlashUsage;                /**< Number of pSLC QoS Domain ADUs allocated by the QoS Domain*/
  struct SEFFlashAddress rootPointers[SEFMaxRootPointer];  /**< List of root pointers */
  struct SEFADUsize ADUsize;              /**< Size of QoS Domain ADUs, data and metadata in bytes */
  uint32_t superBlockCapacity;            /**< Super block capacity in QoS Domain ADUs */
  uint32_t pSLCSuperBlockCapacity;        /**< pSLC super block capacity in QoS Domain ADUs */
  uint16_t maxOpenSuperBlocks;            /**< Maximum number of open super
                                               blocks for the QoS Domain */
  uint16_t defectMapSize;                 /**< Size of a super block defect map */
  struct SEFWeights weights;              /**< Default i/o weights for erase and program */
  enum SEFDeadlineType deadline;          /**< Deadline type for the QoS Domain */
  uint8_t defaultReadQueue;               /**< Default read queue assignment */
  uint8_t numReadQueues;                  /**< Number of read queues as defined by the Virtual Device */
  uint8_t reserved[5];                    /**< Reserved */
};

/**
 *  @ingroup    ApiManCmd
 *  @brief      Returns QoS Domain information, including the list of super
 *              blocks assigned to the QoS Domain.
 *
 *  @param      sefHandle        Handle to the SEF Unit
 *  @param      QoSDomainID      QoS Domain ID
 *  @param[out] info             Buffer for storing QoS Domain information
 *
 *  @return     Status and info summarizing result.
 *
 *  @retval    -ENODEV      The SEF handle is not valid
 *  @retval    -EINVAL      The function parameter is not valid; info returns the parameter index that is not valid
 *  @retval    0            SEFQoSDomainInfo was successfully returned.
 */
struct SEFStatus SEFGetQoSDomainInformation(SEFHandle sefHandle, struct SEFQoSDomainID QoSDomainID,
                                            struct SEFQoSDomainInfo *info) NONNULL(1,3);

/**
 *  @ingroup    CommonStructs
 */
struct SEFWearInfo {
  uint32_t numSuperBlocks;                          /**< Number of super blocks */
  uint32_t reserved_0;                              /**< Reserved, must be initialized to zero */
  struct SEFSuperBlockRecord superBlockRecords[];   /**< List of super block records */
};

/**
 *  @ingroup    ApiManCmd
 *  @brief      Returns list of super blocks to process for wear-leveling.
 *
 *  Used in support of the implementation of a host-specified wear leveling
 *  policy. The SEF Unit has a built in wear-leveling mechanism. It returns closed
 *  blocks in the order they should be released if subject to the host-specified
 *  wear leveling policy.
 *
 *  When info is NULL or insufficiently sized or bufferSize is 0, status.info
 *  returns the minimum buffer size for the complete set of information. The
 *  data that fits in an insufficiently sized buffer is valid but incomplete.
 *  The buffer must be at least the size of the info structure.
 *
 *  @param      qosHandle        Handle to the QoS Domain
 *  @param[out] info             Buffer for storing information of blocks to process
 *  @param      bufferSize       Buffer size
 *
 *  @return     Status and info summarizing result.
 *
 *  @retval    -ENODEV      The QoS Domain handle is not valid
 *  @retval    -EPERM       The QoS Domain Handle is not open
 *  @retval    -EINVAL      The function parameter is not valid; info returns the parameter index that is not valid
 *  @retval    0            info field returns the minimum buffer size if the buffer is insufficient or NULL; otherwise, 0
 */
struct SEFStatus SEFGetReuseList(SEFQoSHandle qosHandle, struct SEFWearInfo *info, size_t bufferSize) NONNULL(1);

/**
 *  @ingroup    CommonStructs
 */
struct SEFRefreshInfo {
  uint32_t numSuperBlocks;                          /**< Number of super blocks */
  uint32_t reserved_0;                              /**< Reserved, must be initialized to zero */
  struct SEFSuperBlockRecord superBlockRecords[];   /**< List of super block records */
};

/**
 *  @ingroup    ApiManCmd
 *  @brief      Returns a list of blocks that have encountered ECC corrections.
 *
 *  These blocks subsequently need to be re-written, or else data loss may
 *  occur. This call should be part of a periodic background check to guard
 *  against data loss.
 *
 *  When info is NULL or insufficiently sized or bufferSize is 0, status.info
 *  returns the minimum buffer size for the complete set of information. The
 *  data that fits in an insufficiently sized buffer is valid but incomplete.
 *  The buffer must be at least the size of the info structure.
 *
 *  @param      qosHandle        Handle to the QoS Domain
 *  @param[out] info             Buffer for storing information of  blocks to process
 *  @param      bufferSize       Buffer size
 *
 *  @return     Status and info summarizing result.
 *
 *  @retval    -ENODEV      The QoS Domain handle is not valid
 *  @retval    -EPERM       The QoS Domain Handle is not open
 *  @retval    -EINVAL      The function parameter is not valid; info returns the parameter index that is not valid
 *  @retval    0            info field returns the minimum buffer size if the buffer is insufficient or NULL; otherwise, 0
 */
struct SEFStatus SEFGetRefreshList(SEFQoSHandle qosHandle, struct SEFRefreshInfo *info,
                                   size_t bufferSize) NONNULL(1);

/**
 *  @ingroup    CommonStructs
 *  @brief      SuperBlocks returned by SEFGetCheckList()
 */
struct SEFCheckInfo {
  uint32_t numSuperBlocks;                            /**< Number of super blocks */
  uint32_t reserved_0;                                /**< Reserved, must be initialized to zero */
  struct SEFSuperBlockRecord superBlockRecords[];     /**< List of super block records */
};

/**
 *  @ingroup    ApiManCmd
 *  @brief      Returns a list of blocks that have encountered conditions that
 *              need to be checked.
 *
 *  In the event that this command indicates that blocks need to be
 *  checked, a subsequent patrol command (SEFCheckSuperBlock) should be issued in
 *  response.  Detailed error statistics will be returned as part of the patrol,
 *  and appropriate corrective actions can be based on the returned information.
 *
 *  When info is NULL or insufficiently sized or bufferSize is 0, status.info
 *  returns the minimum buffer size for the complete set of information. The
 *  data that fits in an insufficiently sized buffer is valid but incomplete.
 *  The buffer must be at least the size of the info structure.
 *
 *  @see        SEFCheckSuperBlock()
 *
 *  @param      qosHandle        Handle to the QoS Domain
 *  @param[out] info             Buffer for storing information of blocks to process
 *  @param      bufferSize       Buffer size
 *
 *  @return     Status and info summarizing result.
 *
 *  @retval    -ENODEV      The QoS Domain handle is not valid
 *  @retval    -EPERM       The QoS Domain Handle is not open
  * @retval    -EINVAL      The function parameter is not valid; info returns the parameter index that is not valid
 *  @retval    0            info field returns the minimum buffer size if the buffer is insufficient or NULL; otherwise, 0
 */
struct SEFStatus SEFGetCheckList(SEFQoSHandle qosHandle, struct SEFCheckInfo *info,
                                 size_t bufferSize) NONNULL(1);

/**
 *  @ingroup    CommonStructs
 */
struct SEFUserAddressList {
  uint32_t numADUs;                                         /**< Number of ADUs */
  uint32_t reserved_0;                                      /**< Reserved, must be initialized to zero */
  struct SEFUserAddress userAddressesRecovery[];            /**< User addresses */
};

/**
 *  @ingroup    ApiManCmd
 *  @brief      Returns the user address list in terms of its underlying super blocks.
 *
 *  Used as part of an FTL reconstruction activity. This can happen in the
 *  event of, for example, ungraceful shutdown.  This mechanism can also be
 *  used to build custom diagnostic tools. This command is not needed during
 *  normal operation.
 *
 *  ADUs that have not been written return a user address equal to
 *  SEFUserAddressIgnore.
 *
 *  When list is NULL or insufficiently sized or bufferSize is 0, status.info
 *  returns the minimum buffer size for the complete list. The data that fits
 *  in an insufficiently sized buffer is valid but incomplete. The buffer must
 *  be at least the size of the list structure.
 *
 *  @param      qosHandle        Handle to the QoS Domain
 *  @param      flashAddress     Flash address of the super block
 *  @param[out] list             Buffer for storing list of user addresses
 *  @param      bufferSize       Buffer size
 *
 *  @return     Status and info summarizing result.
 *
 *  @retval    -ENODEV      The QoS Domain handle is not valid
 *  @retval    -EPERM       The QoS Domain Handle is not open
 *  @retval    -EINVAL      The function parameter is not valid; info returns the parameter index that is not valid
 *  @retval    0            info field returns the minimum buffer size if the buffer is insufficient or NULL; otherwise, 0
 */
struct SEFStatus SEFGetUserAddressList(SEFQoSHandle qosHandle, struct SEFFlashAddress flashAddress,
                                       struct SEFUserAddressList *list, size_t bufferSize) NONNULL(1);

/**
 *  @ingroup    ApiManCmd
 *  @brief      Returns information corresponding to the super block.
 *
 *  @param      qosHandle        Handle to the QoS Domain
 *  @param      flashAddress     Flash address of the super block
 *  @param      getDefectMap     When non-zero populates the defectBitmap member
 *                               of SEFSuperBlockInfo.  See SEFSuperBlockInfo
 *                               for information on the size of defectBitmap
 *  @param[out] info             Buffer for storing super block information
 *
 *  @return     Status and info summarizing result.
 *
 *  @retval    -ENODEV      The QoS Domain handle is not valid
 *  @retval    -EPERM       The QoS Domain Handle is not open
 *  @retval    -EINVAL      The function parameter is not valid; info returns the parameter index that is not valid
 */
struct SEFStatus SEFGetSuperBlockInfo(SEFQoSHandle qosHandle, struct SEFFlashAddress flashAddress,
                                      int getDefectMap, struct SEFSuperBlockInfo *info) NONNULL(1);

/**
 *  @ingroup    ApiManCmd
 *  @brief      This is a read patrol operation which is used in conjunction
 *              with SEFGetCheckList and the kRequirePatrol QoS Notification.
 *
 *  Patrol reads don't use the scheduling queues and are issued as soon as
 *  possible.  Any actions required by the result of the patrol will generate
 *  the appropriate QoS Notification.
 *
 *  @see        SEFGetCheckList()
 *
 *  @param      qosHandle        Handle to the QoS Domain
 *  @param      flashAddress     Flash address of the super block to be checked
 *
 *  @return     Status and info summarizing result.
 *
 *  @retval     0           The super block is checked
 *  @retval    -ENODEV      The QoS Domain handle is not valid
 *  @retval    -EPERM       The QoS Domain Handle is not open
 *  @retval    -EINVAL      The function parameter is not valid; info returns the parameter index that is not valid
 */
struct SEFStatus SEFCheckSuperBlock(SEFQoSHandle qosHandle, struct SEFFlashAddress flashAddress) NONNULL(1);

/**
 *  @ingroup    ApiManCmd
 *  @brief      Deletes the Virtual Devices and allocated physical resources.
 *
 *  Deleting virtual devices for a SEF Unit can only be done during
 *  pre-production.  Once the flash of a SEF Unit has been written to, it is
 *  not possible to delete the Virtual Device configuration.
 *
 *  @param      sefHandle            Handle to the SEF Unit
 *
 *  @return     Status and info summarizing result. Returns 0 on success and negative value on error.
 *
 *  @retval    -ENODEV           The SEF Handle is not valid
 *  @retval    -EINVAL           The function parameter is not valid; info returns the parameter index that is not valid
 *  @retval    -EACCES           You don't have the needed permission to perform this operation
 *  @retval    -ENOTEMPTY        At least one QoS Domain exists
 *  @retval    -EBUSY            The Virtual Device is in use and not all the handles are closed
 */
struct SEFStatus SEFDeleteVirtualDevices(SEFHandle sefHandle) NONNULL(1);

/**
 *  @ingroup    ApiManCmd
 *  @brief      Deletes the target QoS Domain.
 *
 *  The QoS Domain must be in the closed state before issuing this command.
 *  After closing the target QoS Domain, its assigned super blocks are returned
 *  to the Virtual Device's free pool.
 *
 *  @param      sefHandle        Handle to the SEF Unit
 *  @param      QoSDomainID      QoS Domain ID
 *
 *  @return     Status and info summarizing result.
 *
 *  @retval    -ENODEV      The SEF handle is not valid
 *  @retval    -EINVAL      The QoS Domain ID is not valid
 *  @retval    -EACCES      You don't have the needed permission to perform this operation
 *  @retval    -EBUSY       The QoS Domain is in use and not all the handles are closed
 */
struct SEFStatus SEFDeleteQoSDomain(SEFHandle sefHandle, struct SEFQoSDomainID QoSDomainID) NONNULL(1);

/**
 *  @ingroup    ApiManCmd
 *  @brief      Resets the encryption key for a QoS Domain.
 *
 *  @param      vdHandle         Handle to the Virtual Drive
 *  @param      QoSDomainID      QoS Domain ID
 *
 *  @return     Status and info summarizing result.
 *
 *  @retval    -ENODEV      The Virtual Device handle is not valid
 *  @retval    -EPERM       The Virtual Device handle is not open
 *  @retval    -EINVAL      The QoS Domain Id is not valid
 */
struct SEFStatus SEFResetEncryptionKey(SEFVDHandle vdHandle, struct SEFQoSDomainID QoSDomainID) NONNULL(1);

/*
 * Normal user operations associated with I/O and the data path
 */

/**
 *  @ingroup    ApiManCmd
 *  @brief      Opens the target Virtual Device.
 *
 *  Since Virtual Devices are persistent, this provides the mechanism for
 *  opening a preexisting Virtual Device to resume I/O after reboot. This
 *  function needs to be called in order to receive notifications about the
 *  Virtual Device, such as in the event that a reduced capacity notification
 *  is issued.
 *
 *  @param      sefHandle        Handle to the SEF Unit
 *  @param      virtualDeviceID  Virtual Device ID
 *  @param      notifyFunc       Callback to be executed upon event generation
 *  @param      context          A void*  pointer passed to the async event notification
 *                               function (used to pass user context information)
 *  @param      vdHandle         Handle to the Virtual Drive
 *
 *  @return     Status and info summarizing result.
 *
 *  @retval    -ENODEV           The SEF handle is not valid
 *  @retval    -EINVAL           The function parameter is not valid; info returns the parameter index that is not valid
 *  @retval    -EACCES           You don't have the needed permission to perform this operation
 *  @retval    -ENOMEM           The library was unable to allocate needed structures
 *  @retval    -EALREADY         The Virtual Device is already open
 */
struct SEFStatus SEFOpenVirtualDevice(SEFHandle sefHandle, struct SEFVirtualDeviceID virtualDeviceID,
                                      void (*notifyFunc)(void *, struct SEFVDNotification), void *context,
                                      SEFVDHandle *vdHandle) NONNULL(1);

/**
 *  @ingroup    ApiManCmd
 *  @brief      Closes an open Virtual Device and shuts down associated event notification.
 *
 *  @param      vdHandle         Handle to the Virtual Device
 *
 *  @return     Status and info summarizing result.
 *
 *  @retval    -ENODEV           The Virtual Device handle is not valid
 *  @retval    -EPERM            The Virtual Device Handle is not open
 *  @retval    -EWOULDBLOCK      This function cannot be called on a callback thread
 */
struct SEFStatus SEFCloseVirtualDevice(SEFVDHandle vdHandle) NONNULL(1);

/**
 *  @ingroup    ApiManCmd
 *  @brief      Opens a previously created QoS Domain.
 *
 *  Since QoS Domains are persistent, this provides the mechanism for opening
 *  a preexisting QoS Domain to resume I/O after reboot.  This function also
 *  provides a channel to receive notifications regarding this QoS Domain.
 *
 *  @param      sefHandle        Handle to the SEF Unit
 *  @param      QoSDomainID      QoS Domain ID
 *  @param      notifyFunc       Callback to be executed during event generation
 *  @param      context          A void*  pointer passed to the async event notification
 *                               function (used to pass user context information)
 *  @param      encryptionKey    In a multi-tenant environment, different tenants will
 *                               write to separate QoS domains.  Provides for individualized
 *                               encryption keys on a per-domain basis
 *  @param[out] qosHandle        Handle to the QoS Domain
 *
 *  @return     Status and info summarizing result.
 *
 *  @retval    -ENODEV           The SEF handle is not valid
 *  @retval    -EINVAL           The function parameter is not valid; info returns the parameter index that is not valid
 *  @retval    -EACCES           You don't have the needed permission to perform this operation
 *  @retval    -ENOMEM           The library was unable to allocate needed structures
 *  @retval    -EALREADY         The QoS Domain is already open
 */
struct SEFStatus SEFOpenQoSDomain(SEFHandle sefHandle, struct SEFQoSDomainID QoSDomainID,
                                  void (*notifyFunc)(void *, struct SEFQoSNotification), void *context,
                                  const void *encryptionKey, SEFQoSHandle *qosHandle) NONNULL(1,6);

/**
 *  @ingroup    ApiManCmd
 *  @brief      Closes an open QoS Domain.
 *
 *  This will close any open super blocks associated with this domain.
 *  All outstanding kSuperBlockChangeState events will be delivered before this
 *  function returns.  A QoS Domain must be in the closed state to be deleted.
 *
 *  @param      qosHandle        Handle to the QoS Domain
 *
 *  @return     Status and info summarizing result.
 *
 *  @retval    -ENODEV          The QoS Domain handle is not valid
 *  @retval    -EPERM           The QoS Domain Handle is not open
 *  @retval    -EWOULDBLOCK     This function cannot be called on a callback thread
 */
struct SEFStatus SEFCloseQoSDomain(SEFQoSHandle qosHandle) NONNULL();

/**
 *  @ingroup    Enums
 */
enum SEFPropertyID {
  kSefPropertyQoSDomainID,      /**< Get QoS Domain ID in qosID */
  kSefPropertyVirtualDeviceID,  /**< Get Virtual Device ID as vdID */
  kSefPropertyUnitNumber,       /**< Get Unit number as intVal */
  kSefPropertyQoSNotify,        /**< Get QoS notification fnc as qosNotify */
  kSefPropertyPrivateData,      /**< Get/Set private data */
  kSefPropertyNumActiveRequests,/**< Get Number of active requests as intVal */
};

/**
 *  @ingroup    Enums
 */
enum SEFPropertyType {
  kSefPropertyTypeInvalid,           /**< The SEFPropertyID is not supported */
  kSefPropertyTypeNull,              /**< The Property has no value (not set) */
  kSefPropertyTypeInt,               /**< The intVal member is valid */
  kSefPropertyTypePtr,               /**< The ptr member is valid */
  kSefPropertyTypeQoSDomainID,       /**< The qosID member is valid */
  kSefPropertyTypeVirtualDeviceID,   /**< The vdID member is valid */
  kSefPropertyTypeQoSNotify,         /**< The qosNotify member is valid */
};

/**
 *  @ingroup    CommonStructs
 */
struct SEFProperty {
  union {
    //! \unnamed{union:5}
    int intVal;                                           /**< Valid when type is kSefPropertyTypeInt */
    void* ptr;                                            /**< Valid when type is kSefPropertyTypePtr */
    struct SEFQoSDomainID qosID;                          /**< Valid when type is kSefPropertyTypeQoSDomainID */
    struct SEFVirtualDeviceID vdID;                       /**< Valid when type is kSefPropertyTypeVirtualDeviceID */
    void (*qosNotify)(void*,struct SEFQoSNotification);   /**< Valid when type is kSefPropertyTypeQoSNotify */
  };
  enum SEFPropertyType type;                              /**< Denotes the property type */
};

/**
 *  @ingroup    ApiManCmd
 *  @brief      This function gets a property given a SEFQoSHandle
 *
 *  @param      qosHandle        Handle to the QoS Domain
 *  @param      propID           The Property ID requested
 *
 *  @return     Returns the property stored given the property ID; If an unknown
 *              property ID is passed in, the returned type of the property will
 *              be kSefPropertyTypeNull. If kSefPropertyPrivateData is not set,
 *              the returned type of the property will be kSefPropertyTypeNull.
 */
struct SEFProperty SEFGetQoSHandleProperty(SEFQoSHandle qos, enum SEFPropertyID propID) NONNULL();

/**
 *  @ingroup    ApiManCmd
 *  @brief      This function sets a property given a SEFQoSHandle
 *
 *  The only settable property is kSefPropertyPrivateData.
 *
 *  @param      qosHandle        Handle to the QoS Domain
 *  @param      propID           The Property ID being stored
 *  @param      value            The value of the property being stored
 *
 *  @return     Status and info summarizing result.
 *
 *  @retval    -ENODEV      The QoS Domain handle is not valid
 *  @retval    -EPERM       The QoS Domain Handle is not open
 *  @retval    -EINVAL      The function parameter is not valid; info returns
 *                          the parameter index that is not valid
 */
struct SEFStatus SEFSetQoSHandleProperty(SEFQoSHandle qos, enum SEFPropertyID propID,
                                        struct SEFProperty value) NONNULL(1);

/**
 *  @ingroup    ApiManCmd
 *  @brief      This function is used to extract info needed by FTL from
 *              an opaque flash address.
 *
 *  The QoS Domain ID of the passed in qosHandle does not have to match the
 *  QoS Domain ID of the passed in flash address.  No validation is
 *  performed and the address is parsed as if it came from the QoS Domain
 *  of the passed in qosHandle.  When they differ, it's up to the client
 *  to ensure the two different QoS Domain IDs are compatible.  That is, the
 *  virtual devices they live in have the same value for superBlockDies.
 *
 *  @param      qosHandle        Handle to a QoS Domain to interpret/parse the
 *                               flash address. May be NULL if only the
 *                               QoSDomainID is being returned.
 *  @param      flashAddress     The opaque address to be parsed
 *  @param[out] QoSDomainID      A pointer to where to return the QoS Domain ID. A null pointer
 *                               indicates that the QoS Domain ID is not to be returned
 *  @param[out] blockNumber      A pointer to where to return the block number. A null pointer
 *                               indicates that the block number is not to be returned
 *  @param[out] ADUOffset        A pointer to where to return the ADU Offset. A null pointer
 *                               indicates that the ADU Offset is not to be returned
 *
 *  @return     Status and info summarizing result.
 */
struct SEFStatus SEFParseFlashAddress(SEFQoSHandle qosHandle, struct SEFFlashAddress flashAddress,
                                      struct SEFQoSDomainID *QoSDomainID, uint32_t *blockNumber,
                                      uint32_t *ADUOffset);

/**
 *  @ingroup    ApiManCmd
 *  @brief      This function is used to create an opaque flash address.
 *
 * A generated flash address may be rejected by the device if it specifies an
 * illegal ADUOffset, a super block number not owned by the QoSDomainID, or a
 * QoSDomainID that has not been opened by the caller.
 *
 *  @param      qosHandle         Handle of a QoS Domain to create a flash
 *                                address for.
 *  @param      QoSDomainID       The desired QoS Domain ID.  It is not validated
 *                                against the QoS Domain ID of the qosHandle.
 *  @param      blockNumber       The desired super block number.
 *  @param      ADUOffset         The desired ADU Offset.
 *
 *  @return     The generated flash address or the NULL flashAddress if the
 *              qosHandle is invalid.
 */
struct SEFFlashAddress SEFCreateFlashAddress(SEFQoSHandle qosHandle,
                                             struct SEFQoSDomainID QoSDomainID,
                                             uint32_t blockNumber,
                                             uint32_t ADUOffset) NONNULL(1);

/*
 * following routines have sync and async interfaces. QoS Domain must be in the open state
 */

/**
 *  @ingroup    CommonStructs
 *  @brief Supplied to override default write weights
 *
 *  May be used when calling SEFWriteWithoutPhysicalAddress() or
 *  SEFWriteWithoutPhysicalAddressAsync().
 */
struct SEFWriteOverrides {
  uint16_t programWeight;   /**< Weight to use for program instead of the QoS
                                 domain default. 0 will use the QoS Domain
                                 default. */
  uint16_t eraseWeight;     /**< Weight to use for erase instead of the QoS
                                 domain default.  0 will use the QoS Domain
                                 default. */
};

/**
 *  @ingroup    ApiDataCmd
 *  @brief      Writes data to the specified user address to an underlying
 *              physical flash page that is assigned for the QoS Domain.
 *
 *  If auto-allocate is enabled for the super block, when the assigned super
 *  block is filled and closed, the SEF Unit assigns a new super block for the
 *  remaining writes. If auto-allocate is not enabled, host software will know
 *  about the super block size as part of the allocation, and can use this
 *  information to construct appropriately-sized write commands. This call will
 *  not return until the data has been persisted, and will automatically pad the
 *  user data with dummy data if required to complete flash memory programming.
 *
 *  The userAddress supplied here will be checked when reading the data back
 *  with SEFReadWithPhysicalAddress().  If storing a user address is not
 *  required, a userAddress of SEFUserAddressIgnore may be used. The check
 *  can optionally be disabled when reading and must be disabled to read data
 *  written with a user address of SEFUserAddressIgnore. In kSuperBlock mode and
 *  writing multiple ADUs, the LBA portion of the user address is incremented
 *  for each ADU.  The write will fail if the userAddress is incremented to a
 *  value equal to SEFUserAddressIgnore.  The userAddresses in a super block can
 *  be read using SEFGetUserAddressList.
 *
 *  @note The synchronous and asynchronous versions differ in how data is
 *  committed to flash. As described above, the synchronous version flushes data
 *  to flash returning permanent flash addresses.
 *
 *  In contrast, the asynchronous version lazily flushes data to flash. The
 *  flash addresses returned are tentative instead. Once the SEF Unit eventually
 *  flushes a tentative address to flash, the original address may be discovered
 *  to be bad. When this happens, a kAddressUpdate QoS Domain notification is
 *  sent indicating the data has moved to a new permanent flash address. When
 *  the IOCB flag kSefIoFlagNotifyBufferRelease is set, the domain notification
 *  kBufferRelease will be sent for each piece of the IOCB iov as it becomes
 *  committed to flash.  It is then the responsibility of the caller to maintain
 *  the lifetime of the iov buffers until the release notifications are sent.
 *  When not set, the commit state can be inferred instead by the
 *  kSuperBlockStateChanged QoS notification for the owning super block.  Buffer
 *  lifetime is managed by library in this case by copying write data into
 *  library managed buffers.
 *
 *  @param      qosHandle                  Handle to the QoS Domain
 *  @param      flashAddress               Flash address of the super block. SEFAutoAllocate(PSLC) if auto allocate.
 *  @param      placementID                Only valid if the flashAddress is auto allocated. The type of FLASH is
 *                                         set when the write allocates a new super block.  A value from 0 to
 *                                         numPlacementIds–1 indicating what logical data group to place this data in.
 *  @param      userAddress                FTL can store meta-data related to this operation by this field. For
 *                                         example, storing LBA address to bind to this write operation such as data
 *                                         tags.
 *  @param      numADU                     Total amount of write data size calculated in QoS Domain ADUs.
 *  @param      iov                        A pointer to the scatter gather list
 *  @param      iovcnt                     The number of elements in the scatter gather list
 *  @param      metadata                   Pointer to metadata to write with the data; The number of bytes per ADU
 *                                         required is SEFQoSDomainInfo::ADUsize.meta. May be NULL.
 *  @param[out] permanentAddresses         Must allocate space for returned permanent physical addresses equal to 8*length
 *                                         (i.e. 8*number of ADUs)
 *  @param[out] distanceToEndOfSuperBlock  Indicates remaining size in ADU after this write operation.  May be NULL.
 *                                         This is not a guarantee as the block may be forced closed if too many
 *                                         super blocks are open.  When this returns 0, the block was closed.
 *  @param      overrides                  Overrides to scheduler parameters; pointer can be null for none required.
 *
 *  @return     Status and info summarizing result.  When .error is non-zero, .info is the number of ADUs written.
 *
 *  @retval    -ENODEV      The QoS Domain handle is not valid
 *  @retval    -EPERM       The QoS Domain Handle is not open
 *  @retval    -EINVAL      The function parameter is not valid; info returns the parameter index that is not valid
 *  @retval    -ENOSPC      The QoS Domain is out of space
 */
struct SEFStatus SEFWriteWithoutPhysicalAddress(SEFQoSHandle qosHandle, struct SEFFlashAddress flashAddress,
                                                struct SEFPlacementID placementID, struct SEFUserAddress userAddress,
                                                uint32_t numADU, const struct iovec *iov, uint16_t iovcnt,
                                                const void *metadata,
                                                struct SEFFlashAddress *permanentAddresses,
                                                uint32_t *distanceToEndOfSuperBlock,
                                                const struct SEFWriteOverrides *overrides) NONNULL(1,6,9);

/**
 *  @ingroup    CommonStructs
 *  @brief Supplied to override default read weight
 *
 *  May be used when calling SEFReadWithPhysicalAddress() or
 *  SEFReadWithPhysicalAddressAsync().
 */
struct SEFReadOverrides {
  uint16_t readWeight; /**< Weight to use for read instead of the read queue's
                            default. 0 will use the read queue's default. */
  uint8_t readQueue;   /**< Read queue to use for read instead of QoS Domain's
                            default.  A value greater than number of read
                            queues defined for the QoS Domain will use the
                            default read queue for the QoS Domain. */
  uint8_t reserved;    /**< Reserved, must be initialized to zero. */
};

/**
 *  @ingroup    ApiDataCmd
 *  @brief      Reads data from a specified physical address.
 *
 *  While writes are expressed in terms of a placement ID or super block flash
 *  addresses, reads are expressed in terms of physical flash addresses.  Read
 *  commands may interrupt other types of commands. When there is an in-flight
 *  flash memory command to the same flash die other than a read command, the
 *  in-flight command may be suspended in order to maintain deterministic read
 *  latency.  If the target physical address is currently in the process of
 *  being programmed, data will instead be returned from the write buffer.
 *
 *  The userAddress must either match what was stored when the data was written
 *  or be SEFUserAddressIgnore to disable checking.  In kSuperBlock mode, the
 *  LBA portion of the user address is incremented for each ADU in a multi-ADU
 *  write.
 *
 *  @note When reading data that was just written, a read error will be returned
 *  when the data's original flash address has been updated but the notification
 *  has yet to be processed by the client.  In this case, the caller must retry
 *  the read after the flash address change notification has been processed.
 *
 *  @see        SEFSetRootPointer()
 *
 *  @param      qosHandle        Handle to the QoS Domain
 *  @param      flashAddress     Physical address for the read command; When the
 *                               QoS Domain ID and block number are 0, the ADU
 *                               offset is the root pointer index for the flash
 *                               address to read.
 *  @param      numADU           Length of data to read (in ADUs). Maximum allowed
 *                               is superBlockCapacity.
 *  @param      iov              A pointer to the scatter gather list
 *  @param      iovcnt           The number of elements in the scatter gather list
 *  @param      iovOffset        Starting byte offset into iov array
 *  @param      userAddress      Stored data by the FTL.  It will be validated
 *                               with what was stored when the data was written
 *                               except when SEFUserAddressIgnore is supplied
 *  @param      metadata         Buffer to receive metadata stored with the
 *                               data; The number of bytes per ADU required is
 *                               SEFQoSDomainInfo::ADUsize.meta.  May be NULL
 *  @param      overrides        Overrides to scheduler parameters; pointer can
 *                               be null for none required.
 *
 *  @return     Status and info summarizing result.
 *
 *  @retval    -ENODEV      The QoS Domain handle is not valid
 *  @retval    -EPERM       The QoS Domain Handle is not open
 *  @retval    -EINVAL      The function parameter is not valid; info returns the parameter index that is not valid
 */
struct SEFStatus SEFReadWithPhysicalAddress(SEFQoSHandle qosHandle, struct SEFFlashAddress flashAddress,
                                             uint32_t numADU, const struct iovec *iov, uint16_t iovcnt,
                                             size_t iovOffset, struct SEFUserAddress userAddress,
                                             void *metadata, const struct SEFReadOverrides *overrides) NONNULL(1);

/**
 *  @ingroup    ApiManCmd
 *  @brief      Releases the specific super block to the free pool owned by the
 *              Virtual Device to which the specified QoS Domain belongs.
 *
 *  The target super block must have been assigned by a previous call to
 *  SEFAllocateSuperBlock() or as part of SEFWriteWithoutPhysicalAddress().
 *  The super block may be in an open or closed state.
 *
 *  @param      qosHandle        Handle to the QoS Domain of the super block
 *  @param      flashAddress     Flash address of the super block to release
 *
 *  @return     Status and info summarizing result.
 *
 *  @retval    -ENODEV      The QoS Domain handle is not valid
 *  @retval    -EPERM       The QoS Domain Handle is not open
 *  @retval    -EFAULT      The Flash Address is not valid
 */
struct SEFStatus SEFReleaseSuperBlock(SEFQoSHandle qosHandle, struct SEFFlashAddress flashAddress) NONNULL();

/**
 *  @ingroup    CommonStructs
 *  @brief Supplied to override default super block allocation weight
 *
 *  May be used when calling SEFAllocateSuperBlock() or
 *  SEFAllocateSuperBlockAsync().
 */
struct SEFAllocateOverrides {
  uint16_t eraseWeight; /**< Weight to use for erase instead of the QoS Domain
                             default. 0 will use the QoS Domain default. */
};

/**
 *  @ingroup    ApiManCmd
 *  @brief      Allocates a super block that will be assigned to the specified
 *              QoS Domain and returns the flash address of this super block.
 *
 *  The returned super block will be in the open state.  These super blocks
 *  in turn can be used as part of the parameter set for the SEFNamelessCopy and
 *  SEFWriteWithoutPhysicalAddress functions. When allocating a super block, The
 *  SEF Unit intelligently selects a location in a manner designed to optimize
 *  the lifetime of flash memory and will return the flash address that was
 *  selected.  Note that each open super block will allocate a write buffer and
 *  therefore consume memory, so there is a tradeoff in the number of open
 *  super blocks and the amount of memory consumed.
 *
 *  It's required that the total ADUs in the QoS Domain be less than its flash
 *  quota and its Virtual Device have an available super block.  The ADUs in use
 *  by a QoS Domain can be known by summing the writableADUs of each super block
 *  in the QoS Domain.
 *
 *  @see        SEFGetQoSDomainInformation()
 *
 *  @param      qosHandle        Handle to the QoS Domain
 *  @param[out] flashAddress     The flash address of the allocated block
 *  @param      type             kForWrite or kForPSLCWrite
 *  @param[out] defectMap        Optional buffer to receive the block's defect
 *                               map.  Used for kFragmented QoS Domains.  When
 *                               supplied, the buffer must be at least as large
 *                               as SEFQoSDomainInfo::defectMapSize.
 *  @param      overrides        Overrides to scheduler parameters; pointer
 *                               can be null for none required.
 *
 *  @return     Status and info summarizing result.
 *
 *  @retval     0           The info member contains number of ADUs in allocated super block
 *  @retval    -ENODEV      The QoS Domain handle is not valid
 *  @retval    -EPERM       The QoS Domain Handle is not open
 *  @retval    -EINVAL      The function parameter is not valid; info returns the parameter index that is not valid
 *  @retval    -ENOSPC      The QoS Domain is out of space
 */
struct SEFStatus SEFAllocateSuperBlock(SEFQoSHandle qosHandle, struct SEFFlashAddress *flashAddress,
                                       enum SEFSuperBlockType type, uint8_t *defectMap,
                                       const struct SEFAllocateOverrides *overrides) NONNULL(1,2);

/**
 *  @ingroup    ApiManCmd
 *  @brief      Flushes the target super block.
 *
 *  This command causes all written data for the super block that is still in the write buffer
 *  and not persisted to flash memory to be persisted to flash memory. The device will automatically append
 *  data if necessary to finish programming of all pending user data writes. This command will
 *  not return until all the data is persistent and all kAddressUpdate change notifications
 *  generated by the flush have been processed.
 *
 *  When a flush causes a super block to have no more writable ADUs, the super
 *  block will be closed and a QoS Domain notification of the close will be sent.
 *
 *  @param      qosHandle        Handle to the QoS Domain of the super block
 *  @param      flashAddress     Flash address of the super block to be
 *                               flushed.
 *  @param[out] distanceToEndOfSuperBlock  Indicates remaining size in ADU after
 *              this flush operation.  May be NULL.
 *
 *  @return     Status and info summarizing result.
 *
 *  @retval    -ENODEV      The QoS Domain handle is not valid
 *  @retval    -EPERM       The QoS Domain Handle is not open
 *  @retval    -EINVAL      The function parameter is not valid; info returns the parameter index that is not valid
 */
struct SEFStatus SEFFlushSuperBlock(SEFQoSHandle qosHandle, struct SEFFlashAddress flashAddress,
                                    uint32_t *distanceToEndOfSuperBlock) NONNULL(1);

/**
 *  @ingroup    ApiManCmd
 *  @brief      Closes the target super block.
 *
 *  If there is remaining unwritten space in the super block, that space will be
 *  padded with dummy data.  This can be used by the FTL as a means of
 *  closing a super block without invoking a Write command.
 *
 *  This command will not return until all the data is persistent and all
 *  kAddressUpdate change notifications generated by the close have been
 *  processed ensuring that all addresses have either transitioned from
 *  tentative to permanent or have been updated.
 *
 *  @param      qosHandle        Handle to the QoS Domain of the super block
 *  @param      flashAddress     Flash address of the super block to move
 *                               to Closed state by filling data
 *
 *  @return     Status and info summarizing result. When .error is zero,
 *              .info is the size of the super block.
 *
 *  @retval    0            The super block is was closed or was already closed
 *  @retval    -ENODEV      The QoS Domain handle is not valid
 *  @retval    -EPERM       The QoS Domain Handle is not open
 *  @retval    -EFAULT      The Flash Address is not valid
 */
struct SEFStatus SEFCloseSuperBlock(SEFQoSHandle qosHandle, struct SEFFlashAddress flashAddress) NONNULL(1);

/**
 *  @ingroup      Enums
 *  @brief        The source format to be used when copying a super block
 */
enum SEFCopySourceType {
  kBitmap,    /**< Use validBitmap as the copy source */
  kList       /**< Use flashAddressList as the copy source */
} PACKED;

/**
 *  @ingroup     CommonStructs
 *  @brief       Source addresses for SEFNamelessCopy().
 *
 *  The Source addresses format controls if the validBitmap or list of
 *  flash addresses is used.
 *
 *  @see SEFNamelessCopy() SEFUserAddressFilter
 */
struct SEFCopySource {
  enum SEFCopySourceType format;                    /**< Specifies the format to use */
  uint8_t reserved_0[3];                            /**< Reserved, must be initialized to zero */
  uint32_t arraySize;                               /**< Number of items in bitmap array or Flash Address List (QWORD count) */
  union {
    //! \unnamed{union:2}
    const struct SEFFlashAddress *flashAddressList; /**< pointer to flash address list */
    struct {
      //! \unnamed{struct:2}
      struct SEFFlashAddress srcFlashAddress;       /**< flash address of source block.  ADU & ~0x3f indicates the ADU of bit
                                                          0 of validBitmap and ADU & 0x3f is the starting bit in validBitMap */
      const uint64_t *validBitmap;                  /**< pointer to COPY of valid bitmap array (little endian) */
    };
  };
};

/**
 *  @ingroup     CommonStructs
 *  @brief       Optional filtering on user address data during copy
 */
struct SEFUserAddressFilter {
  struct SEFUserAddress userAddressStart; /**< Starting user address of filter */
  uint64_t userAddressRangeLength;        /**< Length of filter range (0 indicates no filtering) */
  uint32_t userAddressRangeType;          /**< Zero to copy data in range; non-zero to copy outside of range */
};

/**
 *  @ingroup    CommonStructs
 *  @brief      Detailed information about results of the SEFNamelessCopy() request
 */
struct SEFAddressChangeRequest {
  uint32_t numProcessedADUs;                  /**< The number of processed ADUs including errors */
  uint32_t nextADUOffset;                     /**< Given a bitmap source, it indicates the next ADU offset of the source flash address;
                                                   Given a list source, it indicates the next entry number in the source flash address list */
  uint32_t numReadErrorADUs;                  /**< The number of ADUs that couldn't be processed due to errors */
  uint32_t numADUsLeft;                       /**< The number of remaining ADUs in the destination super block */
  uint8_t copyStatus;                         /**< A bit array denoting the results of the request */
  uint8_t reserved[7];                        /**< Reserved, must be initialized to zero */
  struct {
    //! \unnamed{struct:3}
    struct SEFUserAddress userAddress;        /**< The user address */
    struct SEFFlashAddress oldFlashAddress;   /**< The old flash address */
    struct SEFFlashAddress newFlashAddress;   /**< The new flash address */
  } addressUpdate[];                          /**< An array of information about copied ADUs */
};

/**
 *  @ingroup    CommonStructs
 *  @brief      Scheduling Queue overrides for SEFNamelessCopy()
 *
 */
struct SEFCopyOverrides {
  uint16_t programWeight; /**< Weight to use for program instead of the QoS
                               domain default.  0 will use the QoS Domain
                               default */
};

#define kCopyConsumedSource             (1 << 0)  /**< Flag set in status.info field for SEFNamelessCopy() \
                                                       when all source ADUs were copied */
#define kCopyClosedDestination          (1 << 1)  /**< Flag set in status.info field for SEFNamelessCopy() \
                                                       when the destination super block was filled/closed */
#define kCopyFilledAddressChangeInfo    (1 << 2)  /**< Flag set in status.info field for SEFNamelessCopy() \
                                                       when the address change info was filled */
#define kCopyFilteredUserAddresses      (1 << 3)  /**< Flag set in status.info field for SEFNamelessCopy() \
                                                       when data outside the user address filter was detected */
#define kCopyReadErrorOnSource          (1 << 4)  /**< Flag set in status.info field for SEFNamelessCopy() when \
                                                       when some of the source ADUs were not copied because of a read */
#define kCopyDestinationDefectivePlanes (1 << 5)  /**< Flag set in status.info field for SEFNamelessCopy() \
                                                       when destination super block has defective planes */
#define kCopyNonClosedSuperBlock        (1 << 6)  /**< Flag set in status.info field for SEFNamelessCopy() \
                                                       when list indication referenced a non-closed super block */

/**
 *  @ingroup    ApiDataCmd
 *  @brief      Performs Nameless Copy with map or list; optional user address filtering.
 *
 *  Copies ADUs as described by copySource to the copyDestination. Source
 *  addresses can only reference closed super blocks.
 *
 *  @param      srcQosHandle                 Handle to the source QoS Domain
 *  @param      copySource                   Physical addresses to copy
 *  @param      dstQosHandle                 Handle to the destination QoS Domain
 *  @param      copyDestination              Flash address of destination super block
 *  @param      filter                       Pointer to user address filter parameters,
 *                                           null indicates no filtering
 *  @param      overrides                    Pointer to overrides to scheduler parameters;
 *                                           pointer can be null for none required.
 *  @param      numAddressChangeRecords      Maximum number of ADUs to copy (size of
 *                                           SEFAddressChangeRequest userAddress array)
 *  @param      addressChangeInfo            Filled with changed addresses
 *
 *  @return     Status and info summarizing result
 *
 *  @retval     0           the info member contains:
 *                          - Source list indication referenced non-closed super blocks (kCopyNonClosedSuperBlock)
 *                          - Destination super block has defective planes (kCopyDestinationDefectivePlanes)
 *                          - Read error was detected on source (kCopyReadErrorOnSource)
 *                          - Data that is out of User Address range is detected (kCopyFilteredUserAddresses)
 *                          - Filled addressChangeInfo array and stopped the copy (kCopyFilledAddressChangeInfo)
 *                          - Destination super block was filled/closed (kCopyClosedDestination)
 *                          - Consumed entire source bitmap or list (kCopyConsumedSource)
 *  @retval    -ENODEV      The QoS Domain handle is not valid
 *  @retval    -EPERM       The QoS Domain Handle is not open
 *  @retval    -EINVAL      The function parameter is not valid; info returns the parameter index that is not valid
 */
struct SEFStatus SEFNamelessCopy(SEFQoSHandle srcQosHandle, struct SEFCopySource copySource, SEFQoSHandle dstQosHandle,
                                 struct SEFFlashAddress copyDestination, const struct SEFUserAddressFilter *filter,
                                 const struct SEFCopyOverrides *overrides, uint32_t numAddressChangeRecords,
                                 struct SEFAddressChangeRequest *addressChangeInfo) NONNULL(1);

/**
 * @ingroup Enums
 */
enum SEFIOCBFlags {
  kSefIoFlagDone                = 0x0001,   /**< Flag for polled I/O - library sets this bit to a
                                                 1 value once the command completes */
  kSefIoFlagNotifyBufferRelease = 0x0100,   /**< Flag set to indicate caller is managing buffer
                                                 lifetime. @see SEFWriteWithoutPhysicalAddress() */
  kSefIoFlagCommit              = 0x0200,   /**< Flag set to force data to flash before completing,
                                                 potentially adding padding */
  kSefIoFlagOverride            = 0x0400,   /**< Flag set to apply weight override to i/o */
};

/**
 *  @ingroup    CallbackStructs
 */
struct SEFCommonIOCB {
  struct SEFStatus status;              /**< [Out] Library sets error field to a non-zero value to
                                             indicate any error when a command completes */
  int16_t opcode;                       /**< Should never be accessed - for internal use by library */
  int16_t flags;                        /**< [In,Out] @see SEFIOCBFlags */
  int32_t reserved;                     /**< Reserved, must be initialized to zero */
  void *param1;                         /**< Ignored by the library; the caller can store context
                                             information that may be accessed from the completion
                                             function */
  void (*complete_func)
      (struct SEFCommonIOCB *);         /**< If non-zero, treated as the address of a function to
                                             be called when a command completes */
};

/**
 *  @ingroup    CallbackStructs
 */
struct SEFWriteWithoutPhysicalAddressIOCB {
  struct SEFCommonIOCB common;          /**< [In,Out] Common fields for all IOCBs */
  struct SEFFlashAddress flashAddress;  /**< Address of the super block for this write; -1 for
                                              auto-allocate, or can use value from previous
                                              super block allocation call */
  struct SEFUserAddress userAddress;    /**< Contains LBA information */
  struct SEFFlashAddress *tentativeAddresses; /**< [Out] List of tentative physical addresses return  */
  const void *metadata;                 /**< Metadata to write with data; The
                                             number of bytes per ADU required is
                                             SEFQoSDomainInfo::ADUsize.meta.
                                             May be NULL */
  const struct iovec *iov;              /**< A pointer to the scatter gather list */
  uint16_t iovcnt;                      /**< The number of elements in the scatter gather list */
  struct SEFPlacementID placementID;    /**< Only valid if the flashAddress is auto allocated. A
                                             value from 0 to numPlacementIds – 1 indicating what
                                             logical data group to place this data in */
  uint32_t numADU;                      /**< Length in QoS Domain ADUs */
  uint32_t distanceToEndOfSuperBlock;   /**< [Out] Return value in units of ADUs */
  struct SEFWriteOverrides overrides;   /**< Override parameters for scheduling
                                             purposes. Must set kSefIoFlagOverride
                                             in flags to apply */
};

/**
 *  @ingroup    ApiDataCmd
 *  @brief      This function is the asynchronous version of SEFWriteWithoutPhysicalAddress().
 *
 *  A caller allocated IOCB is supplied to initiate the write.  The caller can
 *  free the IOCB once the kSefIoFlagDone bit is set in common.flags or the
 *  common.callback_func has been called.  When the IOCB is malformed, the
 *  callback_func may be called on the submitters thread.
 *
 *  @note When the kSefIoFlagCommit flag is set in the IOCB's flag field, the returned
 *  tentative addresses will be permanent, potentially adding padding.
 *
 *  @note Any kAddressUpdate and kSuperBlockStateChange QoS notifications for
 *  the returned tentative addresses will occur after the iocb completion
 *  routine has returned.  When no completion routine is set, the caller must
 *  handle the race condition of acting on done being set and the notifications
 *  being sent.
 *
 *  @see        SEFWriteWithoutPhysicalAddress()
 *
 *  @param          qosHandle    Handle to the QoS Domain
 *  @param[in,out]  iocb         For asynchronous response from SEF Library.
 *                               Unused fields should be set to 0.
 */
void SEFWriteWithoutPhysicalAddressAsync(SEFQoSHandle qosHandle,
                                         struct SEFWriteWithoutPhysicalAddressIOCB *iocb) NONNULL(1,2);

/**
 *  @ingroup    CallbackStructs
 */
struct SEFReadWithPhysicalAddressIOCB {
  struct SEFCommonIOCB common;          /**< [In,Out] Common fields for all IOCBs */
  struct SEFFlashAddress flashAddress;  /**< Physical address for the read command; When the
                                             QoS Domain ID and block number are 0, the ADU
                                             offset is the root pointer index for the flash
                                             address to read.*/
  struct SEFUserAddress userAddress;    /**< Contains LBA information */
  const struct iovec *iov;              /**< A pointer to the scatter gather list */
  void *metadata;                       /**< Receives ADU metadata; The number
                                             of bytes per ADU required is
                                             SEFQoSDomainInfo::ADUsize.meta.
                                             May be NULL */
  size_t iovOffset;                     /**< Starting byte offset into iov array */
  uint32_t numADU;                      /**< Number of ADUs to be read, maximum is superBlockCapacity */
  uint16_t iovcnt;                      /**< The number of elements in the scatter gather list */
  struct SEFReadOverrides overrides;    /**< Override parameters for scheduling
                                             purposes. Must set kSefIoFlagOverride
                                             in flags to apply */
  uint16_t reserved[3];                 /**< reserved, must be initialized to 0 */
};

/**
 *  @ingroup    ApiDataCmd
 *  @brief      This function is the asynchronous version of SEFReadWithPhysicalAddress().
 *
 *  A caller allocated IOCB is supplied to initiate the read.  The caller can
 *  free the IOCB once the kSefIoFlagDone bit is set in common.flags or the
 *  common.callback_func has been called.  When the IOCB is malformed, the
 *  callback_func may be called on the submitters thread.
 *
 *  @see        SEFReadWithPhysicalAddress()
 *
 *  @param          qosHandle    Handle to the QoS Domain
 *  @param[in,out]  iocb         For asynchronous response from SEF Library
 *                               Unused fields should be set to 0.
 *
 */
void SEFReadWithPhysicalAddressAsync(SEFQoSHandle qosHandle,
                                     struct SEFReadWithPhysicalAddressIOCB *iocb) NONNULL(1,2);

/**
 *  @ingroup    CallbackStructs
 */
struct SEFReleaseSuperBlockIOCB {
  struct SEFCommonIOCB common;          /**< [In,Out] Common fields for all IOCBs */
  struct SEFFlashAddress flashAddress;  /**< Address of super block */
};

/**
 *  @ingroup    ApiManCmd
 *  @brief      This function is the asynchronous version of SEFReleaseSuperBlock().
 *
 *  A caller allocated IOCB is supplied to initiate the release.  The caller can
 *  free the IOCB once the kSefIoFlagDone bit is set in common.flags or the
 *  common.callback_func has been called.  When the IOCB is malformed, the
 *  callback_func may be called on the submitters thread.
 *
 *  @see        SEFReleaseSuperBlock()
 *
 *  @param          qosHandle    Handle to the QoS Domain
 *  @param[in,out]  iocb         For asynchronous response from SEF Library
 *                               Unused fields should be set to 0.
 */
void SEFReleaseSuperBlockAsync(SEFQoSHandle qosHandle, struct SEFReleaseSuperBlockIOCB *iocb) NONNULL(1,2);

/**
 *  @ingroup    CallbackStructs
 *  @brief IOCB for SEFAllocateSuperBlockAsync()
 */
struct SEFAllocateSuperBlockIOCB {
  struct SEFCommonIOCB common;            /**< [In,Out] Common fields for all IOCBs */
  struct SEFFlashAddress flashAddress;    /**< [Out] Address of super block */
  uint8_t *defectMap;                     /**< Optional buffer to receive the block's
                                               defect map.  Used for kFragmented
                                               QoS Domains.  When supplied, the
                                               buffer must be at least as large
                                               as SEFQoSDomainInfo::defectMapSize. */
  struct SEFAllocateOverrides overrides;  /**< Override parameters for scheduling
                                               purposes. Must set kSefIoFlagOverride
                                               in flags to apply */
  enum SEFSuperBlockType type;            /**< kForWrite or kForPSLCWrite */
};

/**
 *  @ingroup    ApiManCmd
 *  @brief      This function is the asynchronous version of SEFAllocateSuperBlock().
 *
 *  A caller allocated IOCB is supplied to initiate the allocation.  The caller
 *  can free the IOCB once the kSefIoFlagDone bit is set in common.flags or the
 *  common.callback_func has been called.  When the IOCB is malformed, the
 *  callback_func may be called on the submitters thread.
 *
 *  @see        SEFAllocateSuperBlock()
 *
 *  @param          qosHandle    Handle to the QoS Domain
 *  @param[in,out]  iocb         For asynchronous response from SEF Library
 *                               Unused fields should be set to 0.
 */
void SEFAllocateSuperBlockAsync(SEFQoSHandle qosHandle, struct SEFAllocateSuperBlockIOCB *iocb) NONNULL(1,2);

/**
 *  @ingroup    CallbackStructs
 *  @brief      IOCB for SEFCloseSuperBlockAsync()
 */
struct SEFCloseSuperBlockIOCB {
  struct SEFCommonIOCB common;          /**< [In,Out] Common fields for all IOCBs */
  struct SEFFlashAddress flashAddress;  /**< Address of the super block */
};

/**
 *  @ingroup    ApiManCmd
 *  @brief      This function is the asynchronous version of SEFCloseSuperBlock().
 *
 *  A caller allocated IOCB is supplied to initiate the close.  The caller can
 *  free the IOCB once the kSefIoFlagDone bit is set in common.flags or the
 *  common.callback_func has been called.  When the IOCB is malformed, the
 *  callback_func may be called on the submitters thread.
 *
 *  @note kSuperBlockStateChanged will have been sent and processed before the
 *  completion routine is called and the iocb is marked as done.
 *
 *  @see        SEFCloseSuperBlock()
 *
 *  @param          qosHandle    Handle to the QoS Domain
 *  @param[in,out]  iocb         For asynchronous response from SEF Library
 *
 */
void SEFCloseSuperBlockAsync(SEFQoSHandle qosHandle, struct SEFCloseSuperBlockIOCB *iocb) NONNULL(1,2);

/**
 *  @ingroup    CallbackStructs
 */
struct SEFNamelessCopyIOCB {
  struct SEFCommonIOCB common;                        /**< [In,Out] Common fields for all IOCBs */
  SEFQoSHandle dstQosHandle;                          /**< Handle to the destination QoS Domain */
  struct SEFFlashAddress copyDestination;             /**< Flash address of destination super block */
  uint32_t reserved_0;                                /**< Reserved, must be initialized to zero */
  uint32_t numAddressChangeRecords;                   /**< Maximum number of ADUs to copy (size of
                                                           addressChangeRequest userAddress array) */
  struct SEFAddressChangeRequest *addressChangeInfo;  /**< [Out] Output of changed addresses */
  struct SEFCopySource copySource;                    /**< Physical addresses to copy */
  const struct SEFUserAddressFilter *filter;          /**< Pointer to user address filter parameters, null
                                                           for no filtering */
  struct SEFCopyOverrides overrides;                  /**< Override parameters for scheduling
                                                           purposes. Must set kSefIoFlagOverride
                                                           in flags to apply */
};

/**
 *  @ingroup    ApiDataCmd
 *  @brief      This function is the asynchronous version of SEFNamelessCopy().
 *
 *  A caller allocated IOCB is supplied to initiate the copy.  The caller can
 *  free the IOCB once the kSefIoFlagDone bit is set in common.flags or the
 *  common.callback_func has been called.  When the IOCB is malformed, the
 *  callback_func may be called on the submitters thread.
 *
 *  @see        SEFNamelessCopy()
 *
 *  @param          qosHandle    Handle to the source QoS Domain
 *  @param[in,out]  iocb         For asynchronous response from SEF Library
 *                               Unused fields should be set to 0.
 */
void SEFNamelessCopyAsync(SEFQoSHandle qosHandle, struct SEFNamelessCopyIOCB *iocb) NONNULL(1,2);

#pragma pack(pop)

#ifdef __cplusplus
}
#endif

#endif /* SEFAPI_h */
