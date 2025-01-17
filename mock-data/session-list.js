const sessionList = [
    {
        "id": 15096,
        "category": "Project-Management",
        "course": "PMP-Certification-Training",
        "batchtype": "Live Online Classroom",
        "country": "United States of America",
        "city": null,
        "price": "1299",
        "offerprice": 999,
        "weektype": "Weekend",
        "startdate": "2025-02-01",
        "enddate": "2025-02-09",
        "starttime": "09:00",
        "endtime": "17:00",
        "status": "true",
        "created_at": "2024-09-24T19:16:59.000000Z",
        "updated_at": "2024-09-24T19:16:59.000000Z"
    },
    {
        "id": 15094,
        "category": "Project-Management",
        "course": "PMP-Certification-Training",
        "batchtype": "Live Online Classroom",
        "country": "United States of America",
        "city": null,
        "price": "1299",
        "offerprice": 999,
        "weektype": "Weekdays",
        "startdate": "2025-02-11",
        "enddate": "2025-02-14",
        "starttime": "09:00",
        "endtime": "17:00",
        "status": "true",
        "created_at": "2024-09-24T19:16:24.000000Z",
        "updated_at": "2024-09-24T19:16:24.000000Z"
    },
    {
        "id": 15097,
        "category": "Project-Management",
        "course": "PMP-Certification-Training",
        "batchtype": "Live Online Classroom",
        "country": "United States of America",
        "city": null,
        "price": "1299",
        "offerprice": 999,
        "weektype": "Weekend",
        "startdate": "2025-02-15",
        "enddate": "2025-02-23",
        "starttime": "09:00",
        "endtime": "17:00",
        "status": "true",
        "created_at": "2024-09-24T19:17:25.000000Z",
        "updated_at": "2024-09-24T19:17:25.000000Z"
    },
    {
        "id": 15095,
        "category": "Project-Management",
        "course": "PMP-Certification-Training",
        "batchtype": "Live Online Classroom",
        "country": "United States of America",
        "city": null,
        "price": "1299",
        "offerprice": 999,
        "weektype": "Weekdays",
        "startdate": "2025-02-25",
        "enddate": "2025-02-28",
        "starttime": "09:00",
        "endtime": "17:00",
        "status": "true",
        "created_at": "2024-09-24T19:16:41.000000Z",
        "updated_at": "2024-09-24T19:16:41.000000Z"
    }
]

const countryList = {
    "India": "India",
    "Canada": "Canada",
    "United States of America": "United States of America"
}

const cityList = {
    "India":[
        {"city":"Mumbai"},
        {"city":"Bangalore"}
    ],
    "Canada":[
        {"city":"Toronto"}
    ],
    "United States of America": [
        {
            "city": "New York"
        },
        {
            "city": "Florida, FL"
        },
        {
            "city": "Los Angeles, CA"
        },
        {
            "city": "Chicago, IL"
        },
        {
            "city": "Houston, TX"
        },
        {
            "city": "Phoenix, AZ"
        },
        {
            "city": "Philadelphia, PA"
        },
        {
            "city": "Frankfort, KY"
        },
        {
            "city": "Owensboro, KY"
        },
        {
            "city": "Tucson, AZ"
        },
        {
            "city": "Woodbridge, VA"
        },
        {
            "city": "Portland, OR"
        },
        {
            "city": "Barrington, IL"
        },
        {
            "city": "Washington, DC"
        },
        {
            "city": "San Francisco, CA"
        },
        {
            "city": "Dallas, TX"
        },
        {
            "city": "Austin, TX"
        },
        {
            "city": "Menifee, CA"
        },
        {
            "city": "Seattle, WA"
        },
        {
            "city": "Bumpass, VA"
        },
        {
            "city": "Orlando, FL"
        },
        {
            "city": "Greater New Haven, CT"
        },
        {
            "city": "Richmond, VA"
        },
        {
            "city": "Clayton, NC"
        },
        {
            "city": "St. Louis, MO"
        },
        {
            "city": "Central Virginia, VA"
        },
        {
            "city": "Winchester, VA"
        },
        {
            "city": "San Antonio, Texas"
        },
        {
            "city": "San Diego, California"
        },
        {
            "city": "San Jose, California"
        },
        {
            "city": "Jacksonville, Florida"
        },
        {
            "city": "Fort Worth, Texas"
        },
        {
            "city": "Columbus, Ohio"
        },
        {
            "city": "Indianapolis, Indiana"
        },
        {
            "city": "Charlotte, North Carolina"
        },
        {
            "city": "Seattle, Washington"
        },
        {
            "city": "Denver, Colorado"
        },
        {
            "city": "Nashville-Davidson, Tennessee1"
        },
        {
            "city": "Oklahoma City, Oklahoma"
        },
        {
            "city": "El Paso, Texas"
        },
        {
            "city": "Boston, Massachusetts"
        },
        {
            "city": "Las Vegas, Nevada"
        },
        {
            "city": "Detroit, Michigan"
        },
        {
            "city": "Memphis, Tennessee"
        },
        {
            "city": "Louisville-Jefferson County, Kentucky2"
        },
        {
            "city": "Baltimore, MD"
        },
        {
            "city": "Milwaukee, Wisconsin"
        },
        {
            "city": "Albuquerque, N.M."
        },
        {
            "city": "Tucson, Arizona"
        },
        {
            "city": "Fresno, California"
        },
        {
            "city": "Sacramento, California"
        },
        {
            "city": "Kansas City, Missouri"
        },
        {
            "city": "Mesa, Arizona"
        },
        {
            "city": "Omaha, Nebraska"
        },
        {
            "city": "Colorado Springs, Colorado"
        },
        {
            "city": "Raleigh, North Carolina"
        },
        {
            "city": "Long Beach, California"
        },
        {
            "city": "Virginia Beach, Virginia"
        },
        {
            "city": "Miami, Florida"
        },
        {
            "city": "Oakland, California"
        },
        {
            "city": "Minneapolis, Minnesota"
        },
        {
            "city": "Tulsa, Oklahoma"
        },
        {
            "city": "Bakersfield, California"
        },
        {
            "city": "Wichita, Kansas"
        },
        {
            "city": "Arlington, Texas"
        },
        {
            "city": "Prescott, Arizona"
        },
        {
            "city": "Atlanta, GA"
        },
        {
            "city": "Oakland, CA"
        },
        {
            "city": "Decatur, IL"
        },
        {
            "city": "Santa Fe, New Mexico"
        },
        {
            "city": "Turlock, California"
        },
        {
            "city": "Pittsburgh, PA"
        },
        {
            "city": "Eden Prairie, MN"
        },
        {
            "city": "Round Lake, Illinois"
        },
        {
            "city": "Lansing, MI"
        },
        {
            "city": "Cincinnati Ohio"
        },
        {
            "city": "Edwardville, IL"
        },
        {
            "city": "O'Fallon, IL"
        },
        {
            "city": "Bolton, North Carolina"
        },
        {
            "city": "Northern Virginia"
        },
        {
            "city": "Chino Hills, California"
        },
        {
            "city": "Miami, FL"
        },
        {
            "city": "New Haven, CT"
        },
        {
            "city": "Boulder, Colorado"
        },
        {
            "city": "Fort Wayne, Indiana"
        },
        {
            "city": "Sugar Land, TX"
        },
        {
            "city": "Bolton NC"
        },
        {
            "city": "Waconia, Minnesota"
        },
        {
            "city": "Evansville, IN"
        },
        {
            "city": "Bartlett IL"
        },
        {
            "city": "Fort Worth, TX"
        },
        {
            "city": "San Bernardino, California"
        },
        {
            "city": "Highland, CA"
        },
        {
            "city": "Hartford, CT"
        },
        {
            "city": "Bluffton, SC"
        },
        {
            "city": "Albany, OR"
        },
        {
            "city": "Quakertown, PA"
        },
        {
            "city": "Reno, NV"
        },
        {
            "city": "Mobile, AL"
        },
        {
            "city": "Naples, FL"
        },
        {
            "city": "Arlington, VA"
        },
        {
            "city": "Orange County, CA"
        },
        {
            "city": "Santa Ana, CA"
        },
        {
            "city": "Sparta, NJ"
        },
        {
            "city": "Alexandria, VA"
        },
        {
            "city": "Thousand Oaks, CA"
        },
        {
            "city": "Fort Collins, CO"
        },
        {
            "city": "Greeley, CO"
        }
    ]
}