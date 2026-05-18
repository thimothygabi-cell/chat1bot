export default async function handler(req, res){

const apiKey =
process.env.OPENROUTER_API_KEY;

try{

const response = await fetch(

"https://openrouter.ai/api/v1/chat/completions",

{
method:"POST",

headers:{
"Authorization":"Bearer " + apiKey,
"Content-Type":"application/json"
},

body:JSON.stringify({

model:"deepseek/deepseek-chat-v3-0324",

messages:[
{
role:"system",
content:"Reply only in English"
},
{
role:"user",
content:req.body.message
}
]

})

}

);

const data =
await response.json();

res.status(200).json({
reply:data.choices[0].message.content
});

}

catch(error){

res.status(500).json({
reply:"Server Error"
});

}

}