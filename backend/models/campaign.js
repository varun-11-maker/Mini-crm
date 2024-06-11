const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    audience: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    }],
    message: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['PENDING', 'SENT', 'FAILED'],
        default: 'PENDING'
    }
}, { timestamps: true });

module.exports = mongoose.model('Campaign', campaignSchema);
