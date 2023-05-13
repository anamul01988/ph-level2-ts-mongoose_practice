
// import express from 'express' ////op1 modules import korar
import mongoose from 'mongoose';
import app from './app';
// import cors from 'cors';

// const express = require('express')  //op1 modules import korar
// const mongoose = require('mongoose');

const port = 5000

// //using cors
// app.use(cors());


    async function main() {
      try {
        await mongoose.connect('mongodb://127.0.0.1:27017/test');
        console.log(`Database connection successful`);
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
          })
      } catch (error) {
        console.log(error);
      }
      
        // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
    }

main()

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

