import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mobileMenuOpen: false,
  servicesDropdownOpen: false,
  testimonialIndex: 0,
  newsIndex: 0,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMobileMenu(state) {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    closeMobileMenu(state) {
      state.mobileMenuOpen = false;
    },
    setServicesDropdownOpen(state, action) {
      state.servicesDropdownOpen = action.payload;
    },
    setTestimonialIndex(state, action) {
      state.testimonialIndex = action.payload;
    },
    setNewsIndex(state, action) {
      state.newsIndex = action.payload;
    },
  },
});

export const {
  toggleMobileMenu,
  closeMobileMenu,
  setServicesDropdownOpen,
  setTestimonialIndex,
  setNewsIndex,
} = uiSlice.actions;

export default uiSlice.reducer;
