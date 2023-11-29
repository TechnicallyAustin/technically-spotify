const express = require("express");
const asyncHandler = require("express-async-handler");
const axios = require("axios");
// SPOTIFY API
const clientID = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const responseType = process.env.RESPONSE_TYPE;
const redirectURI = process.env.REDIRECT_URI;

const getAccessToken = async () => {
  try {
    const response = await axios({
      url: "https://accounts.spotify.com/api/token",
      method: "post",
      params: {
        grant_type: "client_credentials",
      },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      auth: {
        username: clientID,
        password: clientSecret,
      },
    });

    return response.data.access_token;
  } catch (err) {
    console.error(err);
    throw err; // Rethrow the error to be caught in the calling function
  }
};

exports.get_all_categories = asyncHandler(async (req, res, next) => {
  try {
    const accessToken = await getAccessToken();

    const response = await axios({
      url: "https://api.spotify.com/v1/browse/categories",
      method: "GET",
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    });

    console.log(response.data);
    res.status(200).json(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

exports.get_one_show = asyncHandler(async (req, res, next) => {});
