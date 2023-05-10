<script>
    export let invis = true;
</script>

<div id="flashbang" class:invis={invis}>

</div>
<div id ="heisenberg" class:invis={invis}>

</div>

<style>
    .invis {
        display: none;
    }
    #heisenberg{
        position: fixed;
        z-index: 32766;
        background-image: url(https://upload.wikimedia.org/wikipedia/en/0/03/Walter_White_S5B.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    #flashbang {
        position: fixed;
        z-index: 32767;
        background-color: white;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;

        animation: flashbang 12.5s 1 forwards;
    }
    @keyframes flashbang {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
</style>