
function drawTreeMap(selector, data){

/*Ejemplo Selector: 'div#my-treemap'
Ejemplo data : JSON
*/
$(selector).treemap(data, {
      nodeClass: function(node, box){
		if (node.state=='disabled'){
			return 'disabled';
		}else{

		   if(node.value <= 50){
			  return 'minor';
			}
			if(node.value > 50 && node.value<= 100){
			  return 'medium';
			}
			 if(node.value > 100){
			  return 'major';
			}
       }
      },
      mouseenter: function (node, box) {
        $('#data-box').html('<p>Label: ' + node.label + '</p><p>Data:' + node.data + '</p><p>Value:' + node.value + '</p>');
      },
	  click: function (node, box){
		if (node.state=='disabled'){
			$(box).disabled;
		}else{
			$('#popover-content').addClass('hide');
			$("[data-toggle=popover]").popover({
				html: true, 
			content: function() {
				return $('#popover-content').html();
        }
});	
			
		}
	  },
	  paintCallback: function (content, node){
			
		
	  },
      itemMargin: 2
      });
					
				
}				