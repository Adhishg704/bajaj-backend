import express from "express";

export const getInfo = async (req, res, next) => {
    try {
        return res.status(200).json({"operation_code": 1});
    } catch (error) {
        return res.status(404).json({"error": "Not found"});
    }
}

export const postInfo = async (req, res, next) => {
    try {
      const { data } = req.body;
      console.log(data);
  
      const full_name = "Adhish Goswami";
      const dob = "07-04-2003";
      const email = "adhish.goswami2021@vitstudent.ac.in";
      const roll_number = "21BCE0621"; 
  
      const user_id = `${full_name.toLowerCase().replace(/\s+/g, '_')}_${dob.replace(/-/g, '')}`;
  
      const numbers = data.filter(item => !isNaN(item));
      const alphabets = data.filter(item => isNaN(item));
  
      const lowercaseAlphabets = alphabets.filter(item => item === item.toLowerCase());
      const highestLowercaseAlphabet = lowercaseAlphabets.length > 0
        ? [lowercaseAlphabets.sort().reverse()[0]]
        : [];
  
      const response = {
        is_success: true,
        user_id,
        email,
        roll_number,
        numbers,
        alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet
      };
      return res.status(200).json(response);
  
    } catch (error) {
      // In case of an error, return a 500 status with the error message
      return res.status(500).json({ error: "Something went wrong" });
    }
  };