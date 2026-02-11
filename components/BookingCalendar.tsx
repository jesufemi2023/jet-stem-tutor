
import React, { useState } from 'react';
import { DailyAvailability, BookingSlot } from '../types.ts';

const MOCK_AVAILABILITY: DailyAvailability[] = [
  {
    date: '2024-05-20',
    dayName: 'Mon',
    slots: [
      { id: '1', time: '09:00 AM', available: true },
      { id: '2', time: '10:30 AM', available: false },
      { id: '3', time: '02:00 PM', available: true },
      { id: '4', time: '04:30 PM', available: true },
    ]
  },
  {
    date: '2024-05-21',
    dayName: 'Tue',
    slots: [
      { id: '5', time: '11:00 AM', available: true },
      { id: '6', time: '01:30 PM', available: true },
      { id: '7', time: '03:00 PM', available: true },
    ]
  },
  {
    date: '2024-05-22',
    dayName: 'Wed',
    slots: [
      { id: '8', time: '10:00 AM', available: true },
      { id: '9', time: '12:00 PM', available: false },
      { id: '10', time: '04:00 PM', available: true },
    ]
  },
  {
    date: '2024-05-23',
    dayName: 'Thu',
    slots: [
      { id: '11', time: '09:30 AM', available: true },
      { id: '12', time: '11:30 AM', available: true },
      { id: '13', time: '02:30 PM', available: true },
    ]
  }
];

const BookingCalendar: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [selectedDay, setSelectedDay] = useState(MOCK_AVAILABILITY[0]);
  const [selectedSlot, setSelectedSlot] = useState<BookingSlot | null>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [bookingData, setBookingData] = useState({ name: '', email: '', phone: '' });

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    setIsConfirmed(true);
  };

  if (isConfirmed) {
    return (
      <div className="max-w-xl mx-auto bg-white p-8 sm:p-12 rounded-[3rem] shadow-2xl text-center animate-in zoom-in duration-500 border border-indigo-50">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-3xl font-black text-gray-900 mb-4">Consultation Booked!</h2>
        <p className="text-gray-500 font-medium mb-10 leading-relaxed">
          Thank you, {bookingData.name}. We've scheduled your direct consultation for <span className="text-indigo-600 font-bold">{selectedDay.dayName}, {selectedDay.date} at {selectedSlot?.time}</span>. A calendar invitation has been sent to your email.
        </p>
        <button 
          onClick={onBack}
          className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black shadow-xl hover:bg-indigo-700 transition"
        >
          Return to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="mb-12">
        <button 
          onClick={onBack}
          className="flex items-center text-indigo-600 font-black text-xs uppercase tracking-widest mb-8 hover:translate-x-[-4px] transition-transform"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" /></svg>
          Back
        </button>
        <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight mb-4">Book a <span className="text-indigo-600">Direct Call</span></h1>
        <p className="text-lg text-gray-500 font-medium">Select a time to speak with our academic counselors about your child's STEM goals.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          {/* Day Selector */}
          <div>
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4 block">1. Select Date</label>
            <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
              {MOCK_AVAILABILITY.map((day) => (
                <button
                  key={day.date}
                  onClick={() => { setSelectedDay(day); setSelectedSlot(null); }}
                  className={`flex-shrink-0 w-24 h-28 rounded-3xl flex flex-col items-center justify-center transition-all border ${
                    selectedDay.date === day.date 
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-xl shadow-indigo-100' 
                      : 'bg-white text-gray-600 border-gray-100 hover:border-indigo-200'
                  }`}
                >
                  <span className="text-[10px] uppercase font-black opacity-60 mb-1">{day.dayName}</span>
                  <span className="text-2xl font-black">{day.date.split('-')[2]}</span>
                  <span className="text-[10px] uppercase font-black opacity-60 mt-1">May</span>
                </button>
              ))}
            </div>
          </div>

          {/* Time Selector */}
          <div>
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4 block">2. Select Time</label>
            <div className="grid grid-cols-2 gap-3">
              {selectedDay.slots.map((slot) => (
                <button
                  key={slot.id}
                  disabled={!slot.available}
                  onClick={() => setSelectedSlot(slot)}
                  className={`py-4 rounded-2xl font-bold text-sm transition-all border ${
                    !slot.available 
                      ? 'bg-gray-50 text-gray-300 border-gray-100 cursor-not-allowed line-through' 
                      : selectedSlot?.id === slot.id
                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg'
                        : 'bg-white text-gray-700 border-gray-100 hover:border-indigo-400'
                  }`}
                >
                  {slot.time}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className={`bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl transition-opacity duration-500 ${selectedSlot ? 'opacity-100' : 'opacity-30 pointer-events-none'}`}>
          <label className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-6 block">3. Finalize Details</label>
          <form onSubmit={handleConfirm} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Parent Full Name</label>
              <input 
                required
                type="text" 
                className="w-full px-6 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-4 focus:ring-indigo-50 outline-none transition font-semibold"
                placeholder="John Doe"
                value={bookingData.name}
                onChange={e => setBookingData({...bookingData, name: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
              <input 
                required
                type="email" 
                className="w-full px-6 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-4 focus:ring-indigo-50 outline-none transition font-semibold"
                placeholder="john@example.com"
                value={bookingData.email}
                onChange={e => setBookingData({...bookingData, email: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Phone Number</label>
              <input 
                required
                type="tel" 
                className="w-full px-6 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-4 focus:ring-indigo-50 outline-none transition font-semibold"
                placeholder="+1 (555) 000-0000"
                value={bookingData.phone}
                onChange={e => setBookingData({...bookingData, phone: e.target.value})}
              />
            </div>
            <button 
              type="submit"
              className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black text-lg hover:bg-indigo-700 transition shadow-2xl shadow-indigo-100 mt-4"
            >
              Confirm Consultation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingCalendar;
