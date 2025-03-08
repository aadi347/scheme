
const schemes = [
    {
        name: "Scholarship for OBC Students",
        ageRange: [10, 25],
        gender: "any",
        category: "obc",
        economicStatus: "any",
        district: "any",
        qualification: "student"
    },
    {
        name: "Financial Aid for APL Families",
        ageRange: [18, 60],
        gender: "any",
        category: "any",
        economicStatus: "apl",
        district: "any",
        qualification: "any"
    },
    {
        name: "Bihar Rural Employment Scheme",
        ageRange: [18, 50],
        gender: "any",
        category: "any",
        economicStatus: "bpl",
        district: "bihar",
        qualification: "any"
    },
    {
        name: "Women Entrepreneurship Program",
        ageRange: [18, 45],
        gender: "female",
        category: "any",
        economicStatus: "any",
        district: "any",
        qualification: "graduate"
    }
];


const userData = ['aditya', '18', 'male', 'obc', 'apl', 'brown card', 'bihar', 'nalanda', 'chandi'];

const userInfo = {
    name: userData[0],
    age: parseInt(userData[1]),
    gender: userData[2],
    category: userData[3],
    economicStatus: userData[4],  
    district: userData[6],
    qualification: "any"  
};


function getEligibleSchemes(user) {
    return schemes.filter(scheme => {
        return (
            (scheme.ageRange[0] <= user.age && user.age <= scheme.ageRange[1]) &&
            (scheme.gender === "any" || scheme.gender === user.gender) &&
            (scheme.category === "any" || scheme.category === user.category) &&
            (scheme.economicStatus === "any" || scheme.economicStatus === user.economicStatus) &&
            (scheme.district === "any" || scheme.district === user.district) &&
            (scheme.qualification === "any" || scheme.qualification === user.qualification)
        );
    });
}


const eligibleSchemes = getEligibleSchemes(userInfo);
console.log("Eligible Schemes:", eligibleSchemes.map(scheme => scheme.name));
