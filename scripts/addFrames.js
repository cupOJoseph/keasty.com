$( document ).ready(function() {
    console.log( "ready!" );
});

function newFrame(path) {
    var obj_path = document.getElementById("filePath-" + path).value.replace(/\\/g,"\\\\");
    var frames = document.getElementById("frames");

    var id = '1234';

    var new_frame = '<div class="content-box"> <a-scene embedded><a-asset-item id="' + id + '" src="' + obj_path + '"></a-asset-item></a-assets> <a-entity collada-model="#' + id + '"></a-entity>  <a-sky color="#c4e6ff"></a-sky> </a-scene> </div>';
    console.log('adding: \n' + new_frame);

    frames.append(new_frame);
}
