/**
@author Jay Peterson
7/27/2019
JavaScript Widget - Create a custom widget starting with this structured JSON file: https://www.reddit.com/r/worldnews.json
The finished widget should display some basic information about the first 5 items in the feed such as title, url, and domain.
The widget should fit within a standard ad size of 300px wide by 600px tall.
Design is up to you.

Note: Use a live-server with node.js to run on a desktop or laptop rather than a server (start in the same directory as source files)
**/

var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function()
{
    if (this.readyState == 4 && this.status == 200)
    {
        var input = JSON.parse(xhttp.responseText); //store parsed json object
        var title = "";
        var maxTitleLength = 40;
        var url = "";
        var domain = "";
        var output = "";

        for (var i = 0; i < 5; i ++)
        {
            //store data in variables for the child at index i
            title = input.data.children[i].data.title;
            shortTitle = title.substring(0, maxTitleLength) + "...";
            url = input.data.children[i].data.url;
            domain = input.data.children[i].data.domain;

            //append html code for child to output string variable
            output += "<div><a href=\"" + url + "\" title=\"" + title + "\">" + shortTitle + "</a>";
            output += "<p class=\"domain\">" + domain + "</p>";
            output += "<p class=\"url\" title=\"" + url + "\">" + url + "</p>";

            if (i != 4) //last item doesn't need an hr
            {   
                output += "<hr class=\"break\"></hr></div";
            }
        }
        document.getElementById("worldnews").innerHTML = output;    //give output html to the worldnews div

        //console.log(input.data.children[0].data.title);   //for testing
    }
};
xhttp.open("GET", "https://www.reddit.com/r/worldnews.json", true);
xhttp.send();