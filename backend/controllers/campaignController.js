const Campaign = require('../models/campaign');

exports.createCampaign = async (req, res) => {
    try {
        const campaign = new Campaign(req.body);
        await campaign.save();
        res.status(201).json(campaign);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAllCampaigns = async (req, res) => {
    try {
        const campaigns = await Campaign.find().populate('audience');
        res.status(200).json(campaigns);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
