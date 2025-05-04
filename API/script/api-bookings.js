const request = require("supertest")("https://restful-booker.herokuapp.com");
const expect =  require("chai").expect;
const { BOOKING_DATA } = require("../data/testData");

let token;
let bookingID;

//////////////////////////////////////////////// AUTH API ////////////////////////////////////////////////
describe("Auth - Get Token", function () {
    it("Get token successfully", async function () {
        const response = await request
            .post("/auth")
            .send({
                username: BOOKING_DATA.username,
                password: BOOKING_DATA.password
            });

        expect(response.status).to.eql(200);
        expect(response.body).to.have.property("token");
        token = response.body.token;
    });
});

//////////////////////////////////////////////// CREATE BOOKING ////////////////////////////////////////////////
describe("Create Booking", function () {
  it("Create Booking Success", async function () {
    const res = await request
      .post("/booking")
      .set("Content-Type", "application/json")
	  .set("Accept", "application/json")
      .send({
        firstname: BOOKING_DATA.firstname,
        lastname: BOOKING_DATA.lastname,
        totalprice: BOOKING_DATA.price,
        depositpaid: true,
        bookingdates: {
          checkin: "2025-05-04",
          checkout: "2026-05-04",
        },
        additionalneeds: "Breakfast",
      });

    expect(res.status).to.eql(200);
    expect(res.body.booking.firstname).to.eql(BOOKING_DATA.firstname);
    expect(res.body.booking.lastname).to.eql(BOOKING_DATA.lastname);
    expect(res.body.booking.totalprice).to.eql(BOOKING_DATA.price);

    bookingID = res.body.bookingid;
  });
});

//////////////////////////////////////////////// GET BOOKING ////////////////////////////////////////////////
describe("Get Booking", function () {
  it("GET Booking by ID Success", async function () {
    const res = await request
    .get("/booking/" + bookingID)
    .set("Accept", "application/json");

    expect(res.status).to.eql(200);
    expect(res.body.firstname).to.eql(BOOKING_DATA.firstname);
    expect(res.body.lastname).to.eql(BOOKING_DATA.lastname);
    expect(res.body.totalprice).to.eql(BOOKING_DATA.price);
  });

  it("GET Booking by ID Failed - Invalid Booking ID", async function () {
    const res = await request.get("/booking/" +bookingID+ "123");
    expect(res.status).to.eql(404);
  });
});

//////////////////////////////////////////////// DELETE BOOKING ////////////////////////////////////////////////
describe("Delete Booking", function(){
    it("Delete Booking Success",async function(){
        const response = await request
            .del("/booking/"+bookingID)
            .set("Content-Type", "application/json")
            .set({ Authorization: "Basic "+token});

        expect(response.status).to.eql(201);
        //ini gatau kenapa 403 terus, coba di postman juga tetep kena 403 forbidden
    })
})