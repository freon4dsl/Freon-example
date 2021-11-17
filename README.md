# ProjectIt-example
An example project showing how to build a projectional editor with ProjectIt.

This example works with version 0.2.0 of ProjectIt.

You should also read the documentation at https://www.projectit.org/020_Getting_Started/010_Installation.

The simple steps to get the exmple running are:

*   First, install all necessary packages by running: 
    ```bash
    yarn install
    ```

*   Run the generator and see the generated files appearing in the folder ~/src/picode:
    ```bash
    yarn generate
    ```

*   Start the server, preferrably in another terminal (note that anything that is saved in the editor will be stored in ~/modelstore):
    ```bash
    yarn model-server
    ```

*	Open another (bash) terminal, and start the generated editor from it:
    ```bash
    yarn dev
    ```
