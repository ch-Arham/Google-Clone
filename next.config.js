/** @type {import('next').NextConfig} */

const dotenv = require('dotenv');
dotenv.config({path:".env"});

const nextConfig = {
  reactStrictMode: true,
  images: {domains: ['www.google.co.uk']},
  env: {
    API_KEY: process.env.API_KEY,
    CONTEXT_KEY: process.env.CONTEXT_KEY
  }
}

module.exports = nextConfig
