# TODO: Fix Code Issues in RAHAT_CLINIC

## Issues to Fix
1. **errorMiddleware.js**: Fix typo in duplicate key error handling: `Object.keys(error.keyValue)` → `Object.keys(err.keyValue)`.
2. **appointmentController.js**: Remove redundant fields `doctor_firstName` and `doctor_lastName` from Appointment.create.
3. **jwtToken.js**: Remove the invalid `trust: proxy` option from cookie settings.
4. **Clean up commented-out fields**: Remove comments for `nic` fields in userSchema.js, userController.js, appointmentController.js, and appointmentSchema.js to clean up code.

## Steps
- [ ] Edit Backend/middlewares/errorMiddleware.js to fix typo.
- [ ] Edit Backend/controller/appointmentController.js to remove redundant fields.
- [ ] Edit Backend/utils/jwtToken.js to remove invalid cookie option.
- [ ] Edit Backend/models/userSchema.js to remove nic comments.
- [ ] Edit Backend/controller/userController.js to remove nic comments.
- [ ] Edit Backend/models/appointmentSchema.js to remove nic comments.
- [ ] Edit Backend/controller/appointmentController.js to remove nic comments.
- [ ] Test the changes by running the backend server.

## Followup
- Verify no syntax errors.
- Test API endpoints if possible.
