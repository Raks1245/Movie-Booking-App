const{User} = require('../models/user.model');


const bcrypt = require('bcrypt');

exports.signUp = async(req,res)=>{
    const {first_name, last_name, password} = req.body;
    const userName = '${first_name}_${last_name}' ;
    const hashedPassword = await bcrypt.hash(password,10);

    const newUser = new User({
        userName,
        password:hashedPassword,
    });

    await newUser.save();
    res.status(201).json({message: 'user created succesfully'});

}

exports.login = async(req,res)=>{
    const{first_name, last_name, password} = req.body;
    const user = await User.findOne({userName});
    if (!user){
        return res.status(401).json({error:'Invalid credentials'});
    }

    const passwordMatch = await bcrypt.compare(password, atob(user.password)
    );
    if(!passwordMatch){
        return res.status(401).json({error:'Invalid credentials'});
    }
    res.json({message:'Login Succesfull'});
}

exports.logOut = async(req,res)=>{
    const {userId} = req.params;
    const user = await User.findByIdAndUpdate(userId,{token:null}) 
}

exports.getCouponCode = async (req, res) => {
    try {
      const { userId } = req.params;
  
      // Find the user by userId
      const user = await User.findOne({ userid: parseInt(userId) });
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      // Return the user's coupons
      res.json({ coupons: user.coupens });
    } catch (error) {
      res.status(500).json({ message: "Error getting coupon codes", error });
    }
  };
  
  // POST /auth/bookShow/:userId
  exports.bookShow = async (req, res) => {
    try {
      const { userId } = req.params;
      const { showId, tickets, couponCode } = req.body;
  
      // Find the user by userId
      const user = await User.findOne({ userid: parseInt(userId) });
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      // Find the show by showId and calculate total price
      // Note: You need to implement fetching the show details here
      const showPrice = 100; // Replace with actual show price
      const totalPrice = showPrice * tickets.length;
  
      // Apply coupon discount if applicable
      let discount = 0;
      if (couponCode) {
        const coupon = user.coupens.find((c) => c.id === parseInt(couponCode));
        if (coupon) {
          discount = coupon.discountValue;
        }
      }
  
      const finalPrice = totalPrice - discount;
  
      // Update the user's bookingRequests
      const newBooking = {
        reference_number: Math.floor(Math.random() * 100000), // Generate a random reference number
        coupon_code: couponCode,
        show_id: showId,
        tickets: tickets,
        total_price: finalPrice,
      };
  
      user.bookingRequests.push(newBooking);
      await user.save();
  
      res.json({ message: "Booking successful", booking: newBooking });
    } catch (error) {
      res.status(500).json({ message: "Error booking show", error });
    }
  };
  