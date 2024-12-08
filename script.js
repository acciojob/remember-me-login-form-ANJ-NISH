//your JS code here. If required.
//your JS code here. If required.

document.addEventListener("DOMContentLoaded",()=>
	{
		if(localStorage.getItem("username"))
		{
			let form=document.getElementById("f1");

			let ele=document.createElement("input");

			ele.setAttribute("id","existing");
			ele.setAttribute("type","button");
			ele.setAttribute("value","Login as existing user.");

			form.appendChild(ele);
			
			let exist=document.getElementById("existing");
		    exist.addEventListener("click",()=>{
			alert(`Logged in as ${localStorage.getItem("username")}.`);
		    })
		}

		let form=document.getElementById("f1");

		form.addEventListener("submit",(e)=>
			{
				e.preventDefault();
				let cb=document.getElementById("checkbox");
				if(cb.checked)
				{
					let username=document.getElementById("username").value;
					let password=document.getElementById("password").value;
					localStorage.setItem("username",username);
					localStorage.setItem("password",password);
				}
				else
				{
				 if(localStorage.getItem("username"))
				 {
				 localStorage.removeItem("username",username);
				 localStorage.removeItem("password",password);	
				 }
				}
				alert(`Logged in as ${localStorage.getItem("username")}.`);
			})

		
	})