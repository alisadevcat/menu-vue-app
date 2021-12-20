<template>
  <div class="editBlock">
    <h4>EDIT MENU</h4>
    <p>
      Click to edit the menu title and edit sections, use the icons to edit,
      move items, and delete.<br />
      To edit the header or footer, hover over the item for options.
    </p>
    <button class="editBlock__close js-editBlock-close">Close</button>
  </div>

  <form
    method="POST"
    enctype="multipart/form-data"
    action="/php/runpdf.php"
    id="saveCapture"
  >
    <input type="hidden" name="img_val" id="img_val" value="" />
    <input type="hidden" name="id" id="id" value="" />
    <input type="hidden" name="type" id="type" value="" />
    <input type="hidden" name="slug" id="slug" value="" />
    <input type="hidden" name="l" id="l" value="" />
  </form>
</template>

<script>
export default {};
</script>