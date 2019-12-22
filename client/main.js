//use jQuery here\

$(() => console.log("The DOM is loaded and ready to be manipulated."));

// $("#myform").on("submit", () => {
//     //preventDefault();
//     const title = $("#exampleInputEmail1").val();
//     const content = $("#exampleFormControlTextarea1").val();

//     const reqBody = {
//         title: title,
//         content: content
//     };

//     // $('#myform button').map((index, ele) => console.log(ele.innerHTML[index]))
//     if (
//         $(".custom-radio input[type='radio']:checked")
//         .next()[0]
//         .innerHTML.includes("Local")
//     ) {
//         console.log("Local operations");
//     }
//     if (
//         $(".custom-radio input[type='radio']:checked")
//         .next()[0]
//         .innerHTML.includes("Cloud")
//     ) {
//         console.log("Cloud operations");
//     }

//     console.log($('button').on('click', (e) => {
//         e.target.id
//     }))
// });

// var operationLocation = $('#myform custom-control-input').on('change', () => {
//     return $(".custom-radio input[type='radio']:checked").next()[0].innerHTML
// })
// console.log(operationLocation);

$("button").on("click", e => {
  console.log(e.target.id);
  const title = $("#exampleInputEmail1").val();
  const content = $("#exampleFormControlTextarea1").val();

  const reqBody = {
    title: title,
    content: content
  };
  console.log(reqBody);
  submitForm(e.target.id, content);
});

const submitForm = (httpMethod, content) => {
  if (
    $(".custom-radio input[type='radio']:checked")
      .next()[0]
      .innerHTML.includes("Local")
  ) {
    console.log("Local operations");
  }
  if (
    $(".custom-radio input[type='radio']:checked")
      .next()[0]
      .innerHTML.includes("Cloud")
  ) {
    console.log("Cloud operations");
    console.log(content);
    if (!content.title) {
      (async () => {
        try {
          const response = await axios.get("http://localhost:3000/files");
          console.log("what is response", response);
          response.data.map(ele => {
            var btn = document.createElement("div"); // Create a <button> element
            btn.innerHTML = ele.title; // Insert text
            document.body.appendChild(btn); // Append <button> to <body>
          });
        } catch (err) {
          alert(err.message);
        }
      })();
    }
  }
};

// $.get("http://loaclhost:3000/fiels").done(console.log("..."));

// $.ajax({
//   url: "http://localhost:3000",
//   crossDomain: true,
//   timeout: 6000
// }).always((jqXHROrData, textStatus, jqXHROrErrorThrown) => {
//   console.log(`In completion: textStatus is: ${textStatus}`);
// });
