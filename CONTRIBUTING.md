# Contributing to Software-Enabled Flash (SEF)

Thank you for your interest in contributing to SEF (Pronounced ess - ee - eff). This document explains our contribution process and procedures:

* [Getting Information](#Getting-Information)
* [Legal Requirements](#Legal-Requirements)
* [Development Workflow](#Development-Workflow)
* [Coding Style](#Coding-Style)
* [Versioning Policy](#Versioning-Policy)
* [Creating a Release](#Creating-a-Release)

## Getting Information

There are three primary ways to connect with the Software-Enabled Flash project:

* The [Software-Enabled Flash Project website](https://softwareenabledflash.org):
  This is the main project site and contains more information about the project, governance, and applications of Software-Enabled Flash technology.

* The [SEF-dev](https://lists.softwareenabledflash.org/g/SEF-dev) mail list:
  This is a development focused mail list with a deep history of technical conversations and decisions that have shaped the project.

* [GitHub Issues](https://github.com/SoftwareEnabledFlash/SEF-API/issues):
  GitHub Issues are used both to track bugs and to discuss feature requests.

### How to Ask for Help

If you have trouble installing, building, or using the library, but there's not yet reason to suspect you've encountered a genuine bug, start by posting a question to the [SEF-dev](https://lists.softwareenabledflash.org/g/SEF-dev) mailing list. This is the place for question such has "How do I...".

### How to Report a Bug

SEF uses GitHub's issue tracking system for bugs and enhancements:
[https://github.com/SoftwareEnabledFlash/SEF-API/issues](https://github.com/SoftwareEnabledFlash/SEF-API/issues)

If you are submitting a bug report, please be sure to note which version of SEF you are using, on what platform (OS/version, which compiler you used, and any special build flags or other unusual environmental issues). Please give a specific account of

* What you tried (a [Minimum, Complete and Verifiable Example (MCVE)](https://stackoverflow.com/help/mcve) will often help)
* What happened
* What you expected to happen instead

with enough detail that others can reproduce the problem.

### How to Request a Change

Open a GitHub issue: [https://github.com/SoftwareEnabledFlash/SEF-API/issues](https://github.com/SoftwareEnabledFlash/SEF-API/issues).

Describe the situation and the objective in as much detail as possible. Feature requests will almost certainly spawn a discussion among the project community.

### How to Contribute a Bug Fix or Change

To contribute code to the project you'll need:

* A good knowledge of git.

* A fork of the GitHub repo.

* An understanding of the project's development workflow.

* Legal authorization. See below for details.

## Legal Requirements

SEF is managed by the Software-Enabled Flash Project, a Linux Foundation project, and follows the open source software best practice policies thereof.

### License

SEF is licensed under the [BSD-3-Clause](LICENSE) license. Contributions to the library should abide by that standard license.

## Development Workflow

The SEF repository uses a simple branching and merging strategy.

The master branch represents the current stable release.  The staging of changes for release are done on the develop branch.  Once complete, develop is merged into master and the release tagged with a version number.

Bug fixes for the current release are first committed to the master branch and it then becomes the new current release, which is tagged with a new version number.  If the same bug exists in the develop branch, the master branch can be merged into the develop branch.  Bug fixes in the master branch are only implemented for the current release.

Feature development is done on a contributor’s local repository.  When it is merged back with the develop branch, it’s expected to be a fast-forward merge with intermediate commits squashed as needed.

### Developer Certification of Origin (DCO)

Software-Enabled Flash uses [the BSD 3-Clause license](LICENSE) to strike a balance between open contribution and allowing you to use the software however you would like to.

The license tells you what rights you have that are provided by the copyright holder. It is important that the contributor fully understands what rights they are licensing and agrees to them. Sometimes the copyright holder isn't the contributor, such as when the contributor is doing work on behalf of a company.

To make a good faith effort to ensure these criteria are met, SEF requires the Developer Certificate of Origin (DCO) process to be followed for any pull requests.

The DCO is an attestation attached to every contribution made by every developer. In the commit message of the contribution, the developer simply adds a Signed-off-by statement and thereby agrees to the DCO, which you can find below or at [https://developercertificate.org/](https://developercertificate.org/).

```
Developer's Certificate of Origin 1.1

By making a contribution to this project, I certify that:

(a) The contribution was created in whole or in part by me and I
    have the right to submit it under the open source license
    indicated in the file; or

(b) The contribution is based upon previous work that, to the
    best of my knowledge, is covered under an appropriate open
    source license and I have the right under that license to
    submit that work with modifications, whether created in whole
    or in part by me, under the same open source license (unless
    I am permitted to submit under a different license), as
    Indicated in the file; or

(c) The contribution was provided directly to me by some other
    person who certified (a), (b) or (c) and I have not modified
    it.

(d) I understand and agree that this project and the contribution
    are public and that a record of the contribution (including
    all personal information I submit with it, including my
    sign-off) is maintained indefinitely and may be redistributed
    consistent with this project or the open source license(s)
    involved.
```

#### DCO Sign-Off Methods

The DCO requires a sign-off message in the following format appear on each commit in the pull request:

```
Signed-off-by: Silvester E. Franciso <sefuser@company.com>
```

The DCO text can either be manually added to your commit body, or you can add either **-s** or **--signoff** to your usual git commit commands. If you are using the GitHub UI to make a change you can add the sign-off message directly to the commit message when creating the pull request. If you forget to add the sign-off you can also amend a previous commit with the sign-off by running **git commit --amend -s**. If you've pushed your changes to GitHub already you'll need to force push your branch after this with **git push -f**.


### Pull Requests

Contributions should be submitted as GitHub pull requests. See [Creating a pull request](https://help.github.com/articles/creating-a-pull-request/) if you're unfamiliar with this concept. 

The development cycle for a code change should follow this protocol:

1. Create a topic branch in your local repository, following the naming format `feature/<your-feature>` or `bugfix/<your-fix>`.

2. Make changes, compile, and test thoroughly. Code style should match existing style and conventions, and changes should be focused on the topic the pull request will be addressing. Make unrelated changes in a separate topic branch with a separate pull request.

3. Push commits to your fork.

4. Create a GitHub pull request from your topic branch.

5. Pull requests will be reviewed by project Committers and contributors, who may discuss, offer constructive feedback, request changes, or approve the work.

6. Upon receiving the required number of Committer approvals (as outlined in [Required Approvals](#Code-Review-and-Required-Approvals)), a Committer other than the PR contributor may merge changes into the master branch.

### Code Review and Required Approvals

Modifications of the contents of the SEF repository are made on a collaborative basis. Anyone with a GitHub account may propose a modification via pull request and it will be considered by the project Committers.

Pull requests must meet a minimum number of Committer approvals prior to being merged. Rather than having a hard rule for all PRs, the requirement is based on the complexity and risk of the proposed changes, factoring in the length of time the PR has been open to discussion. The following guidelines outline the project's establishedapproval rules for merging:

* Core design decisions, large new features, or anything that might be perceived as changing the overall direction of the project should be discussed at length in the mail list before any PR is submitted, in order to: solicit feedback, achieve a majority consensus from Committers, and alert all the stakeholders to be on the lookout for the eventual
PR when it appears.

* Small changes (bug fixes, docs, tests, cleanups) can be approved and merged by a single Committer.

* Big changes that can alter behavior, add major features, or present a high degree of risk should be signed off by a majority of Committers, ideally one of whom should be the "owner" for that section of the codebase (if a specific owner has been designated). 

Approval must be from Committers who are not authors of the change. If one or more Committers oppose a proposed change, then the change cannot be accepted unless:

* Discussions and/or additional changes result in no Committers objecting to the change. Previously-objecting Committers do not necessarily have to sign-off on the change, but they should not be opposed to it.

* The change is escalated to the TSC and the TSC votes to approve the change.  This should only happen if disagreements between Committers cannot be resolved through discussion.

Committers may opt to elevate significant or controversial modifications to the TSC by assigning the `tsc-review` label to a pull request or issue. The TSC should serve as the final arbiter where required.

### Test Policy

All functionality in the library should be covered by an automated test. This test suite is collectively expected to eventually validate the behavior of every part of the project.

* Any new functionality should be accompanied by a test that validates its behavior.

* Any change to existing functionality should have tests added if they don't already exist.

The test should should be run, via ``make check``, before submitting a pull request.

### Project Issue Handling Process

Incoming new issues are labeled promptly by the TSC using GitHub labels. 

The labels include:

* **Autotools** - A problem with the autoconf configuration setup.

* **Bug** - A bug in the source code. Something appears to be functioning improperly: a compile error, a crash, unexpected behavior, etc. 

* **Build/Install Issue** - A problem with building or installing the library: configuration file, external dependency, a compile error with a release version that prevents installation.

* **C++** - A C++ compilation issue: a compiler warning, syntax issue, or language usage or suggested upgrade.

* **CMake** - A build issue with the CMake configuration files.

* **CVE** - A security vulnerability bug.

* **Documentation** - The project documentation: developer or user guide, web site, project policies, etc.

* **Feature Request** - A suggested change or addition of functionality to the library.

* **Modification** - A modification to the code, refactoring or optimization without significant additional behavior

* **Needs Info** - Issue is waiting for more information from the submitter.

* **Question/Problem/Help** - A request for help or further investigation, possibly just user error or misunderstanding.

* **Test Failure** - One of the automated tests is failing, or an analysis tool is reporting problematic behavior.

* **TSC** - To be discussed in the Technical Steering Committee.

* **Won't Fix** - No further action will taken.


## Coding Style

#### Formatting

When modifying existing code, follow the surrounding formatting conventions so that new or modified code blends in with the current code.

* Indent with spaces, never tabs. Each indent level should be 4 spaces.

* Keep code to 80 characters wide to support side-by-side diff but comments can go up-to 160 characters.

* Function return types go on the same line as the function name and parameters:

```
int DOCProcess()
{
    ...
}
```

* Place curly braces on their own lines. Moreover, curly braces can be skipped for single-line statements; however, if the else has curly braces, the first statement should have them too:

```
void DOCDoStuff()
{
    int i;
    for (i = 0; i < N2; ++i)
    {
        // good:
        if (i == N1)
        {
            printf("Should have curly braces");
        }
        else
        {
            ...
        }

        // bad:
        if (i == N1)
            printf("Should have curly braces");
        else
        {
            ...
        }
    }
}
```

* Place conditions and statements on two different lines:
```
// good: 
if (N)
    printf(N);

// bad: 
if (N) printf(N);
```

* Declare all local variables at the top of the scope in which they are used.
```
if (N)
{
    int val;
    if (M)
    {
        int temp;

        ...             // some work

        int no;         // bad
        ...             // some work
    }
}
```

#### Naming Conventions

* Public functions, classes, structs and template type names should start with three characters denoting the header file they belong to and use CamelCase: `struct DOCCustomerList;` or `void DOCSayHi()`

* Function parameters should start with upper case and use CamelCase: `int DoStuff`

* Macros and constants should use all caps and use underscores to distinguish new words: `ALL_CAPS`

* Local variables should start with a lowercase and use lowerCamelCase: `int storeStuff`

* Member fields in a class and struct should start with a lowercase and use lowerCamelCase unless the first word is an abbreviation: `int classStuff`

#### File Conventions

C implementation should be named `*.c` and C++ implementation should be named `*.cpp`. Headers should be named `.h`.  All headers should include `#define` guards and contain `#pragma once` to prevent multiple inclusion.

The first line of the source file should be the source's header file, system, external and local header files should be included in that order separated by a new line. 

For example for `color.c`:
```
#include "color.h"

#include <stdlib.h>
#include <stdint.h>

#include "palette.h"
```

#### Copyright Notices

All new source files should begin with a copyright and license statement matching the following text:
```
/*
 * SOFTWARE-ENABLED FLASH ("SEF")
 * [Software Development Kit (SDK) / Application Programming Interface (API)]
 * [FILENAME]
 *
 * Copyright (C) [YEAR] – [COMMITTER/COMPANY]. All rights reserved.
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
```
Either `Software Development Kit (SDK)` or `Application Programming Interface (API)` should remain, depending on the destination code base.
The `[FILENAME]` should be replaced with file name and extension. 

#### Third-Party Libraries

Prefer C11 standard over other external libraries where possible. Use other external libraries you already see in the code base, but check with the project leadership before adding a new library.

#### Comments

Comment philosophy: try to be clear, try to help teach the reader what's going on in your code.

Prefer C++ comments (starting line with `//`) rather than C comments (`/* ... */`) unless writing doxygen description.

#### Doxygen

All public APIs should have Doxygen comments enclosed in `/* ... */`. Moreover, class and struct members should have description enclosed in `/**< ... */`. Doxygen comments for internal functions are encouraged but not required.

For example:
```
/**
 *  @ingroup    [GROUP_NAME]
 *  @brief      [SHORT_DESCRIPTION]
 *
 *  [LONG_DESCRIPTION]
 *
 *  @param      Color                      Color has a description
 *  @param      [PARAM_NAME]               [PARAM_DESCRIPTION]
 *
 *  @return     [RETURN_DESCRIPTION]
 *
 *  @retval     [RETURN_VAL]               [RETURN_INFO]
 */
int DOCMyFunc (int Color, ...) 
{
    ...
}

/**
 *  @ingroup    [GROUP_NAME]
 *  @brief      [SHORT_DESCRIPTION]
 *
 *  [LONG_DESCRIPTION]
 */
struct DOCMyStruct
{
    ....
    int length;       /**< length has a description */
    int width;        /**< [MEMBER_DESCRIPTION] */
}
```

`GROUP_NAME` and `LONG_DESCRIPTION` are optional Doxygen comments.

## Versioning Policy

SEF uses [semantic versioning](https://semver.org), which labels each version with three numbers: Major.Minor.Patch, where:

* **MAJOR** indicates incompatible API changes
* **MINOR** indicates functionality added in a backwards-compatible manner
* **PATCH** indicates backwards-compatible bug fixes 

## Creating a Release

To create a new release from the master branch:

1. Update the release notes in ``CHANGES.md``.

   Write a high-level summary of the features and improvements. Include the summary in ``CHANGES.md`` and also in the Release comments.

   Include the log of all changes since the last release, via:

        git log v2.2.1...v2.3.0 --date=short --pretty=format:"[%s](https://github.com/SoftwareEnabledFlash/SEF-API/commit/%H) ([%an](@%ae) %ad)"

   Include diff status via:

        git diff --stat v2.2.1
       
2. Create a new release on the GitHub Releases page.

3. Tag the release with name beginning with '``v``', e.g. '``v2.3.0``'.

4. Download and sign the release tarball, as described [here](https://wiki.debian.org/Creating%20signed%20GitHub%20releases),

5. Attach the detached ``.asc`` signature file to the GitHub release as a binary file.
