const express = require('express'),
  app = express(),
  PORT = 8080,
  bodyParser = require('body-parser'),
  cors = require('cors'),
  videoList = require('./data/videoList.json'),
  videoDetailsList = require('./data/videoObj'),
  uuid = require('uuid');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use(cors({
  origin: 'http://localhost:3000'
}))

app.get('/videos', (req, res) => {
  res.json(videoList)
})

app.get('/videos/:id', (req, res) => {
  const videoId = req.params.id;
  const foundVideo = videoDetailsList.find(item => item.id === videoId)
  res.json(foundVideo)
})

app.post('/videos', (req, res) => {
  console.log(req.body)
  const description = req.body.description;
  const id = uuid();
  const title = req.body.title;
  const channel = "Red Cow";
  const image = "https://i.imgur.com/5qyCZrD.jpg";

  videoList.push({
    id,
    title,
    channel,
    image
  })

  videoDetailsList.push({
    id,
    title,
    channel,
    image,
    description,
    views: '0',
    likes: '0',
    duration: '4:01',
    video: 'https://project-2-api.herokuapp.com/stream',
    timestamp: 1545162149000,
    comments: [
      {
        name: "Micheal Lyons",
        comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
        id: "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
        likes: 0,
        timestamp: 1545162149000
      },
      {
        name: "Gary Wong",
        comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
        id: "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
        likes: 0,
        timestamp: 1544595784046
      },
      {
        name: "Theodore Duncan",
        comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
        id: "993f950f-df99-48e7-bd1e-d95003cc98f1",
        likes: 0,
        timestamp: 1542262984046
      }
    ]
  })
})

app.post('/search', (req, res) => {
  const searchStr = req.body.search.toUpperCase();
  const foundSearch = videoDetailsList.filter(item => item.description.toUpperCase().includes(searchStr) || item.title.toUpperCase().includes(searchStr))

  res.json(foundSearch)
  console.log(foundSearch);
  console.log(foundSearch.length);
})

//Handles like button
app.put('/videos/:videoId/likes', (req, res) => {
  const likes = req.body.likes;
  const id = req.body.id;

  const foundVideo = videoDetailsList.find(item => {
    return item.id === id
  })

  //since there is comma "," symbol in likes propery, was not converted to the right number. So, comma was removed through the following codes
  console.log(likes)

  const likeCountArr = likes.split('')
  const noComma = likeCountArr.filter(item => {
    return item !== ','
  })
  const noCommaLikeCount = noComma.join('')
  const updated = Number(noCommaLikeCount) + 1;
  foundVideo.likes = String(updated);
  console.log(foundVideo.likes)
})

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`)
})

