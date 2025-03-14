import { useLocation } from "react-router-dom";
import { useState } from "react";
import QRCode from "react-qr-code";
import { motion } from "framer-motion";
import axios from "axios";

const Payment = () => {
    const location = useLocation();
    const Data = location.state;
    const [transactionId, setTransactionId] = useState("");
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [image, setImage] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

    const IdeathonBool = Data.selectedEvents.some(data => data?.category === "Ideathon");

    const upiId = import.meta.env.VITE_UPIID;
    const upiLink = Data?.userData?.selectedOption === "Both" || IdeathonBool
        ? `upi://pay?pa=${upiId}&pn=YourName&mc=&tid=&tr=&tn=Payment&am=300&cu=INR`
        : `upi://pay?pa=${upiId}&pn=YourName&mc=&tid=&tr=&tn=Payment&am=200&cu=INR`;

    const handleDBStore = async (Data) => {
        try {
            await axios.post("https://techfest-server-exqpayjiy-shyams-projects-6db934b1.vercel.app/api/registration/register", Data);
            setModalMessage("Payment has been successfully made , For furthur details check your mail");
            setShowModal(true);
            setPaymentSuccess(true);
        } catch (err) {
            if (err.response?.data === "Too many requests from the same IP, please try again after 3 minutes.") {
                setModalMessage(err.response.data);
                setShowModal(true);
            }
            else if (err.response) {
                setModalMessage(err.response.data.message || "An error occurred. Please try again.");
                setShowModal(true);
            }
            console.log(err);
        }
    };

    const handleTransactionSubmit = async () => {
        if (transactionId && image) {
            setIsProcessing(true);
            Data.transactionId = transactionId;
            Data.image = image;
            Data.paymentStatus = true;
            Data.amount = Data?.userData?.selectedOption === "Both" ? 300 : 200;
            await handleDBStore(Data);
            setIsProcessing(false);
        }
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#1E0F2D] via-[#2A1B3D] to-[#14092A] text-purple-200"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-purple-600/10 to-purple-400/20 opacity-50 blur-3xl"></div>

            <div className="relative z-10 bg-[#2A1B3D] p-8 rounded-2xl shadow-2xl border border-purple-700/30 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-purple-100 mb-6 drop-shadow-[0_0_5px_rgba(168,85,247,0.5)]">
                    Scan to Pay
                </h2>

                {/* Warning Message */}
                <div className="mb-6 bg-red-900/30 border border-red-500/50 rounded-lg p-4 text-red-200">
                    <h3 className="font-bold text-red-100 mb-1">⚠️ Important Warning</h3>
                    <p className="text-sm">
                        Uploading fake payment screenshots or paying less than the required amount will result in:
                    </p>
                    <ul className="list-disc ml-5 mt-2 text-sm">
                        <li>No refund under any circumstances</li>
                        <li>Immediate cancellation of registration</li>
                        <li>Inability to attend the event</li>
                        <li>Possible ban from future events</li>
                    </ul>
                    <p className="text-xs mt-2 font-semibold">
                        All payments are verified manually before registration is confirmed.
                    </p>
                </div>

                <div className="flex justify-center mb-6">
                    <div className="p-2 bg-white rounded-lg">
                        <QRCode value={upiLink} size={200} />
                    </div>
                </div>

                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Enter your transaction ID"
                        value={transactionId}
                        onChange={(e) => setTransactionId(e.target.value)}
                        className="w-full p-3 bg-[#3B2A4F] text-purple-200 border border-purple-700/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-purple-400"
                    />
                </div>

                <p className="text-lg font-medium text-purple-300 mb-3">
                    Upload your <strong>Payment Screenshot</strong> below:
                </p>

                <div className="mb-4">
                    <label className="block mb-2 text-purple-300 text-sm">
                        Accepted formats: JPG, PNG, JPEG
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="w-full p-3 bg-[#3B2A4F] text-purple-200 border border-purple-700/30 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:bg-purple-700 file:text-white hover:file:bg-purple-600"
                    />
                </div>

                {image && (
                    <div className="mb-4">
                        <p className="text-sm text-purple-400 mb-2">Preview:</p>
                        <img
                            src={image}
                            alt="Uploaded Screenshot"
                            className="max-w-full h-auto border border-purple-700/30 rounded-lg shadow-md"
                        />
                    </div>
                )}

                <button 
                    onClick={handleTransactionSubmit} 
                    className="w-full bg-purple-700 hover:bg-purple-600 text-white font-semibold py-3 rounded-lg transition"
                    disabled={!transactionId || !image || isProcessing}
                >
                    {isProcessing ? "Processing..." : "Submit"}
                </button>

                {paymentSuccess && (
                    <p className="mt-4 text-green-400 font-semibold text-center drop-shadow-[0_0_3px_rgba(34,197,94,0.5)]">
                        Registration Successful
                    </p>
                )}
            </div>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
                        <p className="text-gray-700 mt-2">{modalMessage}</p>
                        <button
                            onClick={() => setShowModal(false)}
                            className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </motion.div>
    );
};

export default Payment;
