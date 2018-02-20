<template>
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">消息提示</h4>
            </div>
            <div class="modal-body">
                <p>{{message}}</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default push-left" data-dismiss="modal">Close</button>
            </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
</template>

<script>
export default {
  name: "modal",
  props:["message"],
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
