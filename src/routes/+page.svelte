<script>
    /**
     * @type {any}
     */
     export let name;

  import Button from '/src/lib/home/Button.svelte';
</script>
  
<!--------------------------- background --------------------------------->
<div class="w-screen h-screen flex flex-col items-center justify-center">

  <!----------------------- Home container ------------------------------->
  <div class="w-40 h-40 border-8 bg-purple rounded-lg bg-purple">

    <!--------------------------- Bio ------------------------------------>
    <div class="w-20 h-20 flex-1 bg-gray-light pt-2 ">
      
      <h1 class="text-3xl font-bold underline">
        Hello {name}!
      </h1>

      <Button />
      
    </div>

  </div>
</div>

<style lang="postcss">
    :global(html) {
    background-color: #24283b;
  }
 
    h1 {
        text-align: center;
        color: #ff9e64;
        text-transform: uppercase;
        font-size: 2em;
        font-weight: 100;
    }

</style>



