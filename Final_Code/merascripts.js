var data=[];
	window.onload=function(){
//Data for the fishes
	data= [["octopus","Giant Pacific Octopus","Octopodidae","Enteroctopus","epbJi35lzEs","octopuso"],
				["shrimp","Spot Shrimp","Pandalidae","Pandalus","R5Z25nY03Yw","shrimpo"],
				["salmon","Atlantic Salmon","Salmonidae","Salmo","8x810mszCfU","salmono"],
				["crab","Snow Crab","Oregoniidae","Chionoecetes","0QaAKi0NFkA","crabo"],
				["jellyfish","Jelly fish","Cyaneidae","Aurelia","Pu_ijC8HFRU","jellyo"],
			["eel","American eel","Anguillidae","Anguilla","3H1ipbS3q6s","eelo"],
			["lobster","Lobster","Nephropidae","Homarus","I5cF08wEMos","lobstero"],
				["whitesturgeon","White Sturgeon","Acipenseridae","Acipenser","z2gPQuq2O-E","sturgeono"],
				["whale","Killer Whale","Delphinidae","Orcinus","rIRZMNOezgI","whaleo"],
				["shark","Shark","Sphyrnidae","Galeocerdo","usoBP0dhDFk","sharko"]]


	}
//Detect Div event
    var divName,pondName;
	$(function() {
		$("div").click(function(event) {
                    pondName=$(this).attr('class');
                    pondName2 = $(this).attr('id');
if ((pondName2=="backdrop")|| (pondName2=="oyster"))
{
$('#divPop').toggle(false); 
//document.getElementById('Video'); myPlayer.pauseVideo()
// Reset video playback
var video = $("#Video").attr("src");
$("#Video").attr("src","");
$("#Video").attr("src",video);
	
}
	else
	{
		// Generate items in Popup table
		var isVisible = $( "#divPop" ).is( ":visible" );
 		var isHidden = $( "#divPop" ).is( ":hidden" );
 		var offset = $(event.target).offset(); 
		var ImgName = this.id;
		var checker = false;
		ImgName+=".gif";
		//$('#divPop').toggle('slow'); 
		for ( var i =0;i<data.length; i++){
					if( this.id==data[i][0] ){
						checker = true;
						$('#td1').html(data[i][1]);
						$('#td11').html(data[i][1]);
						$('#td2').html(data[i][2]);
						$('#td3').html(data[i][3]);
						$('#fishImg').attr("src","design/"+ data[i][5]+".gif");
					//	document.getElementById('Video').src = "https://www.youtube.com/v/" + data[i][4] +"?enablejsapi=1&version=3";
						document.getElementById('Video').src = "https://www.youtube.com/embed/" + data[i][4];
					
													}
                								}
	if ( checker==true)
	{
		//Detect if already tapped on the div
		$('#divPop').toggle('slow'); 
	}

	}
                            }
                        
          );
			       
	  })