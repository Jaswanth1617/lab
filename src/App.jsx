import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import TopNoticeBar from './components/TopNoticeBar';
import Header from './components/Header';
import MobileNavDrawer from './components/MobileNavDrawer';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import AboutSection from './components/AboutSection';
import TestsSection from './components/TestsSection';
import PackagesSection from './components/PackagesSection';
import WhyUsSection from './components/WhyUsSection';
import ServicesSection from './components/ServicesSection';
import HowItWorksSection from './components/HowItWorksSection';
import CtaBanner from './components/CtaBanner';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ToastContainer from './components/ToastContainer';
import TestDetailsModal from './components/modals/TestDetailsModal';
import BookTestModal from './components/modals/BookTestModal';
import ConfirmationModal from './components/modals/ConfirmationModal';
import SearchOverlay from './components/modals/SearchOverlay';
import WriteReviewModal from './components/modals/WriteReviewModal';
import { reviewsData } from './data/reviewsData';

function MainApp() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null); // 'testDetails' | 'bookTest' | 'confirmation' | 'search' | 'writeReview'
  const [selectedTestId, setSelectedTestId] = useState(null);
  const [preselectedBookingTest, setPreselectedBookingTest] = useState('');
  const [bookingRecord, setBookingRecord] = useState(null);
  const [toasts, setToasts] = useState([]);
  const [reviews, setReviews] = useState(reviewsData);

  const showToast = (message) => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  const handleOpenBooking = (testName = '') => {
    setPreselectedBookingTest(testName);
    setActiveModal('bookTest');
  };

  const handleOpenTestDetails = (testId) => {
    setSelectedTestId(testId);
    setActiveModal('testDetails');
  };

  const handleOpenSearch = () => {
    setActiveModal('search');
  };

  const handleOpenWriteReview = () => {
    setActiveModal('writeReview');
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  const handleBookingSuccess = (record) => {
    setBookingRecord(record);
    setActiveModal('confirmation');
    showToast(
      `Booking dispatched to WhatsApp! Token: ${record.appointmentId}`
    );
  };

  const handleReviewSubmit = (newReview) => {
    // Add user review to the top of reviews state
    setReviews((prev) => [newReview, ...prev]);
    showToast('Thank you! Your review has been submitted successfully.');
  };

  return (
    <div className="site-wrapper">
      {/* Top Announcement / Quick Contact Bar */}
      <TopNoticeBar />

      {/* Main Sticky Header */}
      <Header
        onOpenBooking={() => handleOpenBooking('General Diagnostic Test')}
        onOpenSearch={handleOpenSearch}
        onToggleMobileMenu={() => setMobileMenuOpen(true)}
      />

      {/* Mobile Navigation Drawer */}
      <MobileNavDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <TrustSection />
        <AboutSection />
        <TestsSection
          onOpenTestDetails={handleOpenTestDetails}
          onOpenBooking={handleOpenBooking}
        />
        <PackagesSection onOpenBooking={handleOpenBooking} />
        <WhyUsSection />
        <ServicesSection />
        <HowItWorksSection />
        <CtaBanner />
        <ContactSection
          reviews={reviews}
          onShowToast={showToast}
          onOpenWriteReview={handleOpenWriteReview}
        />
      </main>

      {/* Footer */}
      <Footer onOpenTestDetails={handleOpenTestDetails} />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Modals */}
      <TestDetailsModal
        isOpen={activeModal === 'testDetails'}
        testId={selectedTestId}
        onClose={handleCloseModal}
        onBookThis={(name) => handleOpenBooking(name)}
      />

      <BookTestModal
        isOpen={activeModal === 'bookTest'}
        preselectedTest={preselectedBookingTest}
        onClose={handleCloseModal}
        onSuccess={handleBookingSuccess}
      />

      <ConfirmationModal
        isOpen={activeModal === 'confirmation'}
        bookingData={bookingRecord}
        onClose={handleCloseModal}
      />

      <SearchOverlay
        isOpen={activeModal === 'search'}
        onClose={handleCloseModal}
        onSelectTest={(id) => handleOpenTestDetails(id)}
      />

      <WriteReviewModal
        isOpen={activeModal === 'writeReview'}
        onClose={handleCloseModal}
        onSubmitReview={handleReviewSubmit}
      />

      {/* Toast Notifications */}
      <ToastContainer
        toasts={toasts}
        onDismiss={(id) => setToasts((prev) => prev.filter((t) => t.id !== id))}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}
