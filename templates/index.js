fetch("http://127.0.0.1:8000/my_project_api/",{mode: 'no-cors'}).then((data)=>{
    // 
    return data.json();
}).then((objectData)=>{
    console.log(objectData[0].proj_name);
    let tableData="";
    objectData.map((values)=>{
      tableData+=` <tr>
            <th scope="row">${values.proj_id}</th>
            <td>${values.proj_name}</td>
            <td>${values.proj_start_date}</td>
            <td>${values.proj_end_date}</td>
            <td>${values.manager_name}</td>
            <td>${values.manager_email}</td>
            <td>${values.status}}</td>
            <td>Edit</td>
            <td>Delete</td>
            <td>View More</td>
          </tr>`;
    });
    document.getElementById("table_body").innerHTML=tableData
}).catch((err)=>{
  console.log(err)
})