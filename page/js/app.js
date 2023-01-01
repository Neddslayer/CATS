//APP
function $(name,parent){
    return parent?{
        tag:parent.getElementsByTagName(name),
        class:parent.getElementsByClassName(name)
    } : {
        id:document.getElementById(name),
        tag:document.getElementsByTagName(name),
        class:document.getElementsByClassName(name)
    }
}
var render,scene,camera,mymesh,mymaterial,packagedmesh;
//Hopefully this code will be less than 100 lines with the library.
//Code has been reset
function main(){
    $("date").id.innerText = new Date()
    //Wow now that's a lot of code gone.
    render = new Renderer($("emotionalDamage").id,1);
    scene = new Scene(render)
    mymaterial = new SingleColorMaterial("#FF0000")
    mymesh = new Mesh([0,1,-1,-1,0,-1,1,0,-1],[0,1,2],mymaterial);
    var viewMatrix = new Mat4();
    var projectionMatrix = new Mat4();
    projectionMatrix.perspective(45,render.aspect,glMath.EPSILON,100);
    packagedmesh = mymesh.package(render,viewMatrix,projectionMatrix);
    render.drawPackage(packagedmesh)
}
window.onload = main;