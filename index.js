const request = require('superagent')

const main = async () => {

  const data = [{
    "user_id": "5f0ea407f894df0017262c19",
    "job_pay_period_end": "2020-07-25",
    "job_date": "2020-07-20",
    "job_started_at": "2020-07-20T07:00:00-07:00",
    "job_ended_at": "2020-07-20T15:00:00-07:00",
    "job_earnings": "2.93",
    "job_hours": 0.0146675,
    "agent": "Simon dailyPay",
    "facility": "testhcf1"
  }]

    const dailyPay = {
        apiKey: 'UwC5aSjRXnt2LUGRc3CVm8NZ',
        baseUrl: 'https://api.dailypayuat.com/v1',
        enableBulkUsers: true,
        active: true,
      }

      try {

        const res = await request
            .post(`${dailyPay.baseUrl}/gross_earningsr`)
            .set({
              'X-API-Key': dailyPay.apiKey,
            })
            .send(data)

      } catch (err) {
            
      console.log(err)
      //throw err
    }
      
}

main()