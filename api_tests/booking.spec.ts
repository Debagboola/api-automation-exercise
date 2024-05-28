import axios from 'axios';


const api = axios.create({
  baseURL: 'https://restful-booker.herokuapp.com',
  headers: { 'Content-Type': 'application/json' },
});

let bookingId: number;

describe('Booking API Tests', () => {
  it('should create a booking', async () => {
    const response = await api.post('/booking', {
      firstname: 'John',
      lastname: 'Doe',
      totalprice: 123,
      depositpaid: true,
      bookingdates: {
        checkin: '2023-01-01',
        checkout: '2023-01-02'
      },
      additionalneeds: 'Breakfast'
    });
    expect(response.status).toBe(200);
    bookingId = response.data.bookingid;
  });

  it('should get the booking created above', async () => {
    const response = await api.get(`/booking/${bookingId}`);
    expect(response.status).toBe(200);
    expect(response.data.firstname).toBe('John');
  });

  it('should update the booking', async () => {
    const response = await api.put(`/booking/${bookingId}`, {
      firstname: 'John',
      lastname: 'Doe',
      totalprice: 150,
      depositpaid: true,
      bookingdates: {
        checkin: '2023-01-01',
        checkout: '2023-01-03'
      },
      additionalneeds: 'Dinner'
    });
    expect(response.status).toBe(200);
    expect(response.data.totalprice).toBe(150);
    expect(response.data.bookingdates.checkout).toBe('2023-01-03');
    expect(response.data.additionalneeds).toBe('Dinner');
  });
});
