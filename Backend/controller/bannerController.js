const Banner = require('../model/bannerSchema');

// Function to create a new banner
const createBanner = async (req, res) => {
    try {
        const { title, subtitle, image, url } = req.body;
        const newBanner = new Banner({ title, subtitle, image, url });
        await newBanner.save();
        res.status(201).json({ message: 'Banner created successfully', banner: newBanner });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};
// Function to get all banners
const getAllBanners = async (req, res) => {
    try {
        const banners = await Banner.find().lean();
        res.status(200).json({ message: 'Banners retrieved successfully', banners });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};
// Function to edit an existing banner
const editBanner = async (req, res) => {
    try {
        const { id } = req.params;
        const { title,subtitle, image, url } = req.body;
        const updatedBanner = await Banner.findByIdAndUpdate(id, { title,subtitle, image, url }, { new: true });
        if (!updatedBanner) {
            return res.status(404).json({ message: 'Banner not found' });
        }
        res.status(200).json({ message: 'Banner updated successfully', banner: updatedBanner });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

module.exports = {
    createBanner,
    getAllBanners,
    editBanner
};