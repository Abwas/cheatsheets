localStorage.setItem("visited-"+window.location.pathname,!0);var links=document.getElementsByTagName("a");for(i=0;i<links.length;i++){var link=links[i];link.host==window.location.host&&localStorage.getItem("visited-"+link.pathname+"/")&&(link.dataset.visited=!0)}