#pragma strict

var radius     : float  = 0.0;
var distance   : float  = 0.0;
var typeOfCell : String = 'floor';

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
    var raycastHits : RaycastHit[] = Physics.SphereCastAll(this.transform.position, radius, this.transform.position + Vector3.up, distance);
    //var result : RaycastHit[] = new RaycastHit[raycastHits.length];
    var result = new Array();
    
    for(var go : RaycastHit in raycastHits) {
        if (go.transform.gameObject.tag == typeOfCell) {
            result.push(go);
        }
    }
    return result.ToBuiltin(RaycastHit) as RaycastHit[];
}
