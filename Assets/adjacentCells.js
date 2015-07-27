#pragma strict

var radius   : float = 0.0;
var distance : float = 0.0;

function OnMouseOver()
{
    var raycastHits : RaycastHit[] = getAdjacents();
    for(var go : RaycastHit in raycastHits) {
        go.transform.gameObject.GetComponent.<Renderer>().material.color = Color.red;
    }
    this.gameObject.GetComponent.<Renderer>().material.color = Color.white;
}

function OnMouseExit()
{
    var raycastHits : RaycastHit[] = getAdjacents();
    for(var go : RaycastHit in raycastHits) {
        go.transform.gameObject.GetComponent.<Renderer>().material.color = Color.white;
    }
}

function getAdjacents()
{
    return Physics.SphereCastAll(this.transform.position, radius, this.transform.position + Vector3.up, distance);
}
