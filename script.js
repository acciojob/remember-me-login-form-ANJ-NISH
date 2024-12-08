//your JS code here. If required.
//your JS code here. If required.

document.addEventListener("DOMContentLoaded",()=>
	{
		let cb=document.getElementById("checkbox");
		
		cb.addEventListener('click',()=>{
		if(!checkbox.checked){
		localStorage.removeItem("password");
		localStorage.removeItem("username");
		document.getElementById("existing").style.display = "none";
	}	
});

		if(localStorage.getItem("username") && localStorage.getItem("password"))
		{
	    document.getElementById("existing").style.display = "block";
         }

		let form=document.getElementById("f1");

		form.addEventListener("submit",(e)=>
			{
				e.preventDefault();
			     let username=document.getElementById("username").value;
				if(cb.checked)
				{
					let password=document.getElementById("password").value;
					localStorage.setItem("username",username);
					localStorage.setItem("password",password);
					
		document.getElementById("existing").style.display = "block";
				}
				else
				{
				 alert(`Logged in as ${username}`);
		document.getElementById("existing").style.display = "none";
				}
				alert(`Logged in as ${username}`)
               
			})

		document.getElementById("existing").addEventListener('click',()=>
			{
				let name = JSON.parse(localStorage.getItem("username"));
	alert(`Logged in as ${name}`);
													 
	})