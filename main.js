
// Definir variaveis
	
	var prod1 = 0;
	var prod2 = 0;
	var prod3 = 0;
	var prod4 = 0;
	var prod5 = 0;
	var prodclick = 0;
	var prodtime;
	var cooldown = 1000;
	
	var prodname1 = "Palavras";
	var prodname2 = "Paginas";
	var prodname3 = "Artigos em Congresso";
	var prodname4 = "Artigos em revista QUALIS C";
	var prodname5 = "Artigos em revista QUALIS B";
	var prodname6 = "Artigos em revista QUALIS A2";
	var prodname7 = "Artigos em revista QUALIS A1";
	
	var errms = " insuficientes para completar ";
	
	var bol1 = 0;
	var bol2 = 0;
	var bol3 = 0;
	var bol4 = 0;
	var bol5 = 0;
	var bol6 = 0;
	var bol7 = 0;
	
	var boos1 = 0;
	var boos2 = 0;
	var boos3 = 0;
	var boos4 = 0;
	var boos5 = 0;
	
	var ef1 = 1;
	var ef2 = 1;
	var ef3 = 1;
	
// Indicadores de Produtividade

	//	PRODUZIR PALAVRAS
		
		function buttonProd1(number) {
			clearInterval(prodtime)
			var prodclick = 1;
				
			prodtime = setInterval(function(){
					prod1 = prod1 + number;
					document.getElementById('prod1').innerHTML = prod1;
				}, cooldown);
			document.getElementById('prodclick1').innerHTML = prodclick;
		}
	
	// 	PRODUZIR PÁGINA
	
		function buttonProd2(){
			clearInterval(prodtime)
			var prodclick = 2;
			var costProd2 = 50; // costProd2
			
			if (prod1 >= costProd2){
				prodtime = setInterval(function(){
				
					prod1 = prod1 - costProd2;
					prod2 = prod2 + 1;
										
					document.getElementById('prod1').innerHTML = prod1;
					document.getElementById('prod2').innerHTML = prod2;
					document.getElementById('prodclick').innerHTML = prodclick;
				
					if (prod1 < costProd2) {
					clearInterval(prodtime);
					var error1 = prodname1 + errms + prodname2;
					document.getElementById('error1').innerHTML = error1;
					
					setTimeout(function(){
					error1 = "";
					document.getElementById('error1').innerHTML = error1;
					}, 3000);
					
					}		
			
				}, cooldown);
				
			} else {
				clearInterval(prodtime);
				var error1 = prodname1 + errms + prodname2;
				document.getElementById('error1').innerHTML = error1;
				
				setTimeout(function(){
					error1 = "";
					document.getElementById('error1').innerHTML = error1;
					}, 3000);
			}
		}
				
	// 	PRODUZIR ARTIGO EM CONGRESSO
	
		function buttonProd3(){
			clearInterval(prodtime)
			var prodclick = 3;
			var costProd3 = 100; // costProd3
			
			if (prod2 >= costProd3){
				prodtime = setInterval(function(){
					prod3 = prod3 + 1;
					prod2 = prod2 - costProd3;
					
				document.getElementById('prod2').innerHTML = prod2;
				document.getElementById('prod3').innerHTML = prod3;
				document.getElementById('prodclick').innerHTML = prodclick;
				
				if (prod2 < costProd3) {
					clearInterval(prodtime);
					var error1 = prodname2 + errms + prodname3
					document.getElementById('error1').innerHTML = error1;
					
					setTimeout(function(){
					error1 = "";
					document.getElementById('error1').innerHTML = error1;
					}, 3000);
					
					}
				
				}, cooldown);
				
			} else {
				var error1 = prodname2 + errms + prodname3
				document.getElementById('error1').innerHTML = error1;
				
				setTimeout(function(){
					error1 = "";
					document.getElementById('error1').innerHTML = error1;
					},3000);
			}
		}
	
	// PRODUZIR ARTIGOS EM REVISTA C
	
		
		function buttonProd4(){
			clearInterval(prodtime)
			var prodclick = 3;
			var costProd4 = 1000; // costProd3
			
			if (prod3 >= costProd4){
				prodtime = setInterval(function(){
					prod4 = prod4 + 1;
					prod3 = prod3 - costProd4;
					
				document.getElementById('prod3').innerHTML = prod3;
				document.getElementById('prod4').innerHTML = prod4;
				document.getElementById('prodclick').innerHTML = prodclick;
				
				if (prod3 < costProd4) {
					clearInterval(prodtime);
					var error1 = prodname3 + errms + prodname4
					document.getElementById('error1').innerHTML = error1;
					
					setTimeout(function(){
					error1 = "";
					document.getElementById('error1').innerHTML = error1;
					}, 3000);
					
					}
				
				}, cooldown);
				
			} else {
				var error1 = prodname3 + errms + prodname4
				document.getElementById('error1').innerHTML = error1;
				
				setTimeout(function(){
					error1 = "";
					document.getElementById('error1').innerHTML = error1;
					},3000);
			}
		}
	
	// PRODUZIR ARTIGOS EM REVISTA B
	
		
		function buttonProd5(){
			clearInterval(prodtime)
			var prodclick = 3;
			var costProd5 = 100; // costProd3
			
			if (prod4 >= costProd5){
				prodtime = setInterval(function(){
					prod5 = prod5 + 1;
					prod4 = prod4 - costProd5;
					
				document.getElementById('prod4').innerHTML = prod4;
				document.getElementById('prod5').innerHTML = prod5;
				document.getElementById('prodclick').innerHTML = prodclick;
				
				if (prod4 < costProd5) {
					clearInterval(prodtime);
					var error1 = prodname4 + errms + prodname5
					document.getElementById('error1').innerHTML = error1;
					
					setTimeout(function(){
					error1 = "";
					document.getElementById('error1').innerHTML = error1;
					}, 3000);
					
					}
				
				}, cooldown);
				
			} else {
				var error1 = prodname4 + errms + prodname5
				document.getElementById('error1').innerHTML = error1;
				
				setTimeout(function(){
					error1 = "";
					document.getElementById('error1').innerHTML = error1;
					},3000);
			}
		}

		// PRODUZIR ARTIGOS EM REVISTA A2
	
		
		function buttonProd6(){
			clearInterval(prodtime)
			var prodclick = 3;
			var costProd6 = 1000; // costProd3
			
			if (prod5 >= costProd6){
				prodtime = setInterval(function(){
					prod6 = prod6 + 1;
					prod5 = prod5 - costProd6;
					
				document.getElementById('prod5').innerHTML = prod5;
				document.getElementById('prod6').innerHTML = prod6;
				document.getElementById('prodclick').innerHTML = prodclick;
				
				if (prod5 < costProd6) {
					clearInterval(prodtime);
					var error1 = prodname5 + errms + prodname6
					document.getElementById('error1').innerHTML = error1;
					
					setTimeout(function(){
					error1 = "";
					document.getElementById('error1').innerHTML = error1;
					}, 3000);
					
					}
				
				}, cooldown);
				
			} else {
				var error1 = prodname5 + errms + prodname6
				document.getElementById('error1').innerHTML = error1;
				
				setTimeout(function(){
					error1 = "";
					document.getElementById('error1').innerHTML = error1;
					},3000);
			}
		}
	
		// PRODUZIR ARTIGOS EM REVISTA A1
	
		
		function buttonProd7(){
			clearInterval(prodtime)
			var prodclick = 3;
			var costProd7 = 10000; // costProd3
			
			if (prod6 >= costProd7){
				prodtime = setInterval(function(){
					prod7 = prod7 + 1;
					prod6 = prod6 - costProd7;
					
				document.getElementById('prod6').innerHTML = prod6;
				document.getElementById('prod7').innerHTML = prod7;
				document.getElementById('prodclick').innerHTML = prodclick;
				
				if (prod6 < costProd7) {
					clearInterval(prodtime);
					var error1 = prodname6 + errms + prodname7
					document.getElementById('error1').innerHTML = error1;
					
					setTimeout(function(){
					error1 = "";
					document.getElementById('error1').innerHTML = error1;
					}, 3000);
					
					}
				
				}, cooldown);
				
			} else {
				var error1 = prodname6 + errms + prodname7
				document.getElementById('error1').innerHTML = error1;
				
				setTimeout(function(){
					error1 = "";
					document.getElementById('error1').innerHTML = error1;
					},3000);
			}
		}
		
	
// Bolsistas

	// GRADUACAO
	
	function buttonBol1() {
		
		var costBol1 = Math.floor(10*Math.pow(1.1,bol1));
		
		if (prod1 >= costBol1) {
			bol1 = bol1 + 1;
			prod1 = prod1 - costBol1;
		}
		
		document.getElementById('bol1').innerHTML = bol1;
		
	}

	function buttonBol2() {
	
		var costBol2 = Math.floor(500*Math.pow(1.1,bol2));
	
		if (prod1 >= costBol2) {
			bol2 = bol2 + 1;
			prod1 = prod1 - costBol2;
		}
		
		document.getElementById('bol2').innerHTML = bol2;	
	}
	
	function buttonBol3() {
	
		var costBol3 = Math.floor(100*Math.pow(1.1,bol3));
	
		if (prod2 >= costBol3) {
			bol3 = bol3 + 1;
			prod2 = prod2 - costBol3;
		}
		
		document.getElementById('bol3').innerHTML = bol3;	
	}

	function buttonBol4() {
	
		var costBol4 = Math.floor(500*Math.pow(1.1,bol4));
	
		if (prod3 >= costBol4) {
			bol4 = bol4 + 1;
			prod3 = prod3 - costBol4;
		}
		
		document.getElementById('bol4').innerHTML = bol4;	
	}

		function buttonBol5() {
	
		var costBol5 = Math.floor(100*Math.pow(1.1,bol5));
	
		if (prod4 >= costBol5) {
			bol5 = bol5 + 1;
			prod4 = prod4 - costBol4;
		}
		
		document.getElementById('bol5').innerHTML = bol5;	
	}
	
		function buttonBol6() {
	
		var costBol6 = Math.floor(10000*Math.pow(1.1,bol6));
	
		if (prod4 >= costBol6) {
			bol6 = bol6 + 1;
			prod4 = prod4 - costBol4;
		}
		
		document.getElementById('bol6').innerHTML = bol6;	
	}	

		function buttonBol7() {
	
		var costBol7 = Math.floor(100000*Math.pow(1.1,bol7));
	
		if (prod4 >= costBol7) {
			bol7 = bol7 + 1;
			prod4 = prod4 - costBol7;
		}
		
		document.getElementById('bol7').innerHTML = bol7;	
	}	
// Boosters


	function buttonBoost1(){
		
		// Reduz Cooltime em 1% - Aumento de Produtividade
		var costBoost1 = Math.floor(100*Math.pow(1.25,boos1));
		
		if (prod1 >= costBoost1){
		boos1 = boos1 + 1;
		cooldown = cooldown/1.01;
		
		prod1 = prod1 - costBoost1;
			
		document.getElementById('boos1').innerHTML = boos1;
		};
	};
	
		function buttonBoost2(){
		
		// Reduz Cooltime em 10% - Aumento de Produtividade
		var costBoost2 = Math.floor(100*Math.pow(1.25,boos2));
		
		if (prod2 >= costBoost2){
		boos2 = boos2 + 1;
		cooldown = cooldown/1.1;
		
		prod2 = prod2 - costBoost2;
			
		document.getElementById('boos2').innerHTML = boos1;
		};
	};

		function buttonBoost3(){
		
		// Aumento de Produtiv dos Bolsistas 1 e 2 em 10% - Aumento de Produtividade
		var costBoost3 = Math.floor(100*Math.pow(1.25,boos3));
		
		if (prod2 >= costBoost2){
		boos3 = boos3 + 1;
		ef1 = ef1 + 0.1*boos3;
		
		prod2 = prod2 - costBoost3;
			
		document.getElementById('boos3').innerHTML = boos1;
		};
	};
	
		function buttonBoost4(){
		
		// Aumento de Produtiv dos Bolsistas 3 e 4 em 10% - Aumento de Produtividade
		var costBoost4 = Math.floor(100*Math.pow(1.25,boos4));
		
		if (prod3 >= costBoost4){
		boos4 = boos4 + 1;
		ef2 = ef2 + 0.1*boos4;
		
		prod3 = prod3 - costBoost4;
			
		document.getElementById('boos4').innerHTML = boos4;
		};
	};	
	
		function buttonBoost5(){
		
		// Aumento de Produtiv dos Bolsistas em 50% - Aumento de Produtividade
		var costBoost5 = Math.floor(100*Math.pow(1.25,boos5));
		
		if (prod4 >= costBoost5){
		boos5 = boos5 + 1;
		ef3 = ef3 + 0.5*boos3;
		
		prod4 = prod4 - costBoost5;
			
		document.getElementById('boos5').innerHTML = boos5;
		};
	};		
	
// REFRESH

window.setInterval(function(){
	
	prod1 = prod1 + (bol1 + 10000*bol7)*(ef1+ef3);
	prod2 = prod2 + (bol2 + 10*bol5 + 1000*bol7)*(ef1+ef3);
	prod3 = prod3 + bol3 + (100*bol6 + 100*bol7)*(ef2+ef3);	
	prod4 = prod4 + bol4 + (10*bol6 + 10*bol7)*(ef2+ef3);
	prod5 = prod5 + bol7*ef3;
	prod6 = prod6; 
	prod7 = prod7;
	
	document.getElementById('prod1').innerHTML = prod1;
	document.getElementById('prod2').innerHTML = prod2;
	
	document.getElementById('cooldown').innerHTML = cooldown;
	
}, 1000);


