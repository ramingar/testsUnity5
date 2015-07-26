#pragma strict

var agent : NavMeshAgent;
var goal  : GameObject;

function Start ()
{

}

function Update ()
{
    var go : GameObject;
    if (Input.GetMouseButtonUp(0)) {
        go = gameObjectClicked();
    }
    
    if (go!=null) {
        agent.destination = go.transform.position;
    }
    
}

function gameObjectClicked() : GameObject
{
    var ray       : Ray = Camera.main.ScreenPointToRay ( Input.mousePosition );
    var hit       : RaycastHit;
    
    if(Physics.Raycast(ray, hit)) {
        return hit.transform.gameObject;
    } else {
        return null;
    }
}