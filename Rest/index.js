const express = require('express');
const app = express();
const path = require('path');
var methodOverride = require('method-override');


//dattabse nahi 
let arr = [ 
    //blogs
    {
        id:0,
        titel:'7-Step Process To Get Free Stuff On Temu & Enjoy Free Money!',
        desc :'Temu is a well-known online marketplace that links customers with different businesses and brands. With Temu, you can easily locate everything in one place, eliminating the need to spend hours'
    },
    {
        id:1,
        titel:'10 + Best Telegram Channel For Dream 11 Team That Boost Earning!',
        desc:'If you are a lover of fantasy sports; no matter whether it is cricket football hockey '
    },
    {
        id:2,
        titel:'7 Simple Ways To Find Telegram Downloaded Files In Android',
        desc:'Telegram is one of the social messaging platform that provides useful features for users.'
    }
]
// Set the view engine and views directory
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname , 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


app.get('/',(req, res)=>{
   res.send('hy this is home routes')
});
//task - display all the blogs
app.get('/blogs',(req, res)=>{
   res.render('index', {arr});
});

//task 2 - ek form bau data ko get 

app.get('/blog/new',(req,res)=>{
  res.render('new');
});


//task 3 - humhare db

app.post('/blogs', (req,res)=>{
   let {titel , desc }= req.body;
   arr.push({titel , desc , id: arr.length});
   res.redirect('/blogs');

});


//task 4 - ek partiucalr blog show 
app.get('/blog/:id', (req,res)=>{
 let {id}= req.params;  //muje dede 

  let foundarr = arr.find(arr=> arr.id == id)
    
 // console.log(foundarr);
 res.render('show', {foundarr}  );
})


//task 5 edit karma  
app.get('/blogs/:id/edit', (req, res) => {
    let { id } = req.params;
    let foundarr = arr.find(arr => arr.id == id);

    if (foundarr) {
        res.render('edit', {foundarr});
    } else {
        res.status(404).send('Blog not found');
    }
});


app.patch('/blogs/:id', (req, res) => {
    let { id } = req.params;
    let foundarr = arr.find(arr => arr.id == id);

    if (!foundarr) {
        return res.status(404).send('Blog not found');
    }

    let { desc } = req.body;
   foundarr.desc = desc;
   res.redirect('/blogs');
   
});

//tasl 7  --rask 

app.delete('/blogs/:id', (req, res)=>{
   let {id} = req.params;
  let newarr=  arr.filter((arr)=>{
    return arr.id != id;
    
   })
   arr= newarr;
   res.redirect('/blogs');


})



app.listen(8080, () => {
    console.log('Express app connected at port 8080');
});
