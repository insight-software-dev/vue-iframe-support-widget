Once you have made any edits to the code, to set it up as a component:

`npm run build`

add to git, and you can use the branch to test the component in other projects. 

Default branch name is 'main' when importing to other projects.

i.e. `npm install --save git+https://github.com/insight-software-dev/vue-iframe-support-widget.git#main`

e.g. `npm install --save git+https://github.com/insight-software-dev/vue-iframe-support-widget.git#<your-branch-name>`

for sanity, and if there are no changes that seem to happen; follow these steps in the importing project:

`npm uninstall vue-iframe-support-widget`
`npm install --save git+https://github.com/insight-software-dev/vue-iframe-support-widget.git#<your-branch-name>`
`docker compose stop; docker compose build <project> --no-cache; docker compose up <project> --force-recreate -d`

then run docker as normal and check the component is working as expected.
