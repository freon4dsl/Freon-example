# Freon-example
An example project showing how to build a projectional editor with Freon.

This example works with version 0.5.0 of Freon.

You should also read the documentation at https://www.freon4dsl.dev/020_Getting_Started/010_Installation.

For an explanation of the content of the project see
<a href="https://www.freon4dsl.dev/020_Getting_Started/020_Project_Structure" target="_blank">
Project Structure</a>.

## Getting started

In the following the root of the project will be indicated with '~'.

*   Clone or copy branch `master`.

*   Next, install all necessary packages by running:

    ```bash
    npm install
    ```

*   Run the generator and see the generated files appearing in the folder ~/src/picode:
    ```bash
    npm run generate
    ```


* Start the server (note that anything that is saved in the editor will be stored in `~/modelstore`):

    ```bash
    npm run server
    ```

* Open another (bash) terminal, and start the generated editor from it:

     ```bash
     npm run prepare-app   # Needed generate the runtime css files.
     npm run dev
     ```
     
* Open the app in the browser on `localhost:8080`, or the one shown in the terminal

The last command opens your preferred browser with the generated editor for the language
on [localhost:8080](http://localhost:8080/).

Under the `View` menu you can deselect the `myTables` option to get a view as text without tables.

Styling of the outer app is done though a collection of css variables in `src/webapp/style/_freon_theme-light.scss`.

Styling of the editor components is done
_TODO need to add this before the release_.
For now you need to look at the webapp-starter package in freon4dsl development branch as an example.

If you change the theme, run `npm run prepare-app` to uopdate the running app with the new style.
