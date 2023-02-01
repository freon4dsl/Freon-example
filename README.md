# ProjectIt-example
An example project showing how to build a projectional editor with ProjectIt.

This example works with version 0.5.0 of ProjectIt.

You should also read the documentation at https://www.projectit.org/020_Getting_Started/010_Installation.

For an explanation of the content of the project see
<a href="https://www.projectit.org//020_Getting_Started/020_Project_Structure" target="_blank">
Project Structure</a>.

## Getting started

In the following the root of the project will be indicated with '~'.

*   Clone or copy branch `master`.

*   Next, install all necessary packages by running:

    ```bash
    yarn install
    ```

*   Run the generator and see the generated files appearing in the folder ~/src/picode:
    ```bash
    yarn generate
    ```


* Start the server (note that anything that is saved in the editor will be stored in `~/modelstore`):

    ```bash
    yarn model-server
    ```

* Open another (bash) terminal, and start the generated editor from it:

     ```bash
     yarn prepare-app   # Needed generate the runtime css files.
     yarn dev
     ```
     
* Open the app in the browser on `localhost:5000`

The last command opens your preferred browser with the generated editor for the language
on [localhost:5000](http://localhost:5000/).

Under the `View` menu you can deselect the `myTables` option to get a view as text without tables.

Styling is done though a collection of css variables in `src/webapp/style/_freon_theme-light.scss`.
If you change the theme, run `yarn prepare-app` to uopdate the running app with the new style.
