<script lang='ts'>
    // todo this component can be combined with FreonLayout
    // import IconButton, { Label, Icon } from "@smui/button";
    // import { mdiAlertCircle, mdiCheckCircle, mdiInformation, mdiLightbulb, mdiCheck } from "@mdi/js";
    // import { Svg } from "@smui/common/elements";
    import Banner from "@smui/banner";
    import { Label } from "@smui/button";

    import { userMessage, userMessageOpen, severity } from "./components/stores/UserMessageStore";
    import SplitPane from "./components/SplitPane.svelte";
    import EditorPart from "./components/editor-panel/EditorPart.svelte";
    import InfoPanel from "./components/info-panel/InfoPanel.svelte";
    import { SeverityType } from "@freon4dsl/core";
    import Button from "@smui/button";

    // <Icon slot='icon' class="less-padding" component={Svg} viewBox='0 0 48 48'>
    //     {#if $severity === SeverityType.info}
    //     <path d={mdiInformation}/>
    // {:else if $severity === SeverityType.hint}
    // <path d={mdiLightbulb}/>
    // {:else if $severity === SeverityType.warning}
    // <path d={mdiAlertCircle}/>
    // {:else if $severity === SeverityType.error}
    // <path d={mdiCheckCircle}/>
    // {/if}
    // </Icon>

    // Instead of a button to dismiss the banner, we use a 'normal' text button.
    // Instead of an icon in front of the banner message, which takes up a lot of vertical space,
    // we use a different style/color for the error message.
    // todo use freon variables here
    let severityClass: string;
    $: severityClass =
        $severity === SeverityType.info ?
            "blue"
        : ($severity === SeverityType.hint ?
                "green"
           : ($severity === SeverityType.warning ?
                "plum"
             : ($severity === SeverityType.error ?
                "red"
                : "none")));
</script>

<div>
    <Banner bind:open={$userMessageOpen} mobileStacked content$style='max-width: max-content;'>
        <Label slot='label' style="color:{severityClass}">
            {$userMessage}
        </Label>
        <Button slot="actions">Dismiss</Button>
    </Banner>
    <SplitPane type='vertical' pos={80}>
            <EditorPart slot='a'/>
            <InfoPanel  slot='b'/>
    </SplitPane>
</div>
