# ProjectIt-example
An example project showing how to build a projectional editor with ProjectIt.

This example works with version 0.2.0 of ProjectIt.

You should also read the documentation at https://www.projectit.org.

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

*   Start the server (note that anything that is saved in the editor will be stored in `~/modelstore`):
    ```bash
    yarn model-server
    ```

*	Open another (bash) terminal, and start the generated editor from it:
     ```bash
     yarn dev
     ```

> The last command opens your preferred browser with the generated editor for the language
>    `Entity` on `<a href="http://localhost:3000/" target="_blank">http://localhost:3000/</a>`.
>    If Chrome is not your preferred browser, please open the above page in Chrome, because we
>    cannot ensure that the editor functions as it should in other browsers.
