HelloGit: code tutorials encoded in Git
=====

Attached is an example of one such tutorial, which happens to be for the Express framework for Node JS.

The idea is that the codebase is slowly expanded from a very simple example. Each chapter of the tutorial will be a commit. All code is stored in the file tree, all tutorial text is stored in the commits.

It is probably not best viewed on GitHub. I use the program tig for easily walking through the tutorial.

![tig screenshot](https://raw.github.com/jtwaleson/HelloGit/master/screenshot.png)

Pros:
 * clear separation of code and commentary
 * code can be checked and experimented with at each step
 * can be viewed and distributed using all kinds of systems
 * consistent rewrites using git rebase
 * can be easily ported to html using a simple tool (print commit message, print diff).

Cons:
 * patches on the tutorial require history rewrites

How to deal with this? It would probably be best of patches are regular commits on top of the last commit, labeled 'errata'. Every now and then the maintainer can group these errata and perform a rebase.

Have you created a HelloGit tutorial for something? Let me know and I'll add a reference to it here.
