import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-hidden bg-white text-black bg-gradient-to-r from-blue-600 to-green-400">
      <div className="h-[54px] w-full hidden sm:flex sm:items-center  sm:w-[800px] md:w-[900px] lg:w-[1300px] place-content-around">
        <h1 className="text-[13px] h-[54px] w-[250px]  border-r-red-500 pt-4 ">
          Phone Number:+924-52555-266
        </h1>
        <h1 className="pl-[30px] w-[300px]">Email:kh09977@gmail.com </h1>
        <div className=" w-[200px]  pr-9 overflow-hidden">
          <Image src="/icon.png" alt="image" width={300} height={200} />
        </div>
      </div>

      <div
        id="header"
        className=" h-[64px] w-full flex items-center place-content-between bg-slate-700 md:"
      >
        <div id="logo" className="h-[50px]">
          <Image src="/logo.png" alt="image" width={130} height={100} />
        </div>
        <div
          id="homes"
          className="hidden sm:flex sm:space-x-1.5 sm:text-[12px] sm:font-[700] sm:underline md:text-[16px] md:space-x-3 lg:text-[20px]">
        
          <div>Home</div>
          <div>Courses</div>
          <div>Services</div>
          <div>Achievement</div>
          <div>About Us</div>
          <div>Testimonial</div>
        </div>
        <div id="logins" className="flex gap-3">
          <div className="border border-gray-700 rounded-[5px] p-1 pl-[12px] pr-[12px] bg-white  hover:bg-black hover:text-red-700">
            <h1>Login</h1>
          </div>
          <div className="border border-black rounded-[5px] p-1 bg-black text-white ">
            <h1>Sign Up</h1>
          </div>
        </div>
      </div>

      <div id="Hero">
        <div id="sec1" className="h-[850px] w-[370px] sm:h-[800px] sm:w-[800px] sm:flex sm:items-center md:w-[1024px] place-content-around lg:w-svw">
          <div className=" h-[390px] w-[428px] pl-[20px] pt-[20px] ">
            <div className=" h-[174px] w-[428px] font-[700] text-[40px] pb-4 ">
              <h1>
                Learn new skills <br /> online with ease
              </h1>
              <p className="text-[16px] font-[300] w-[380px] h-[54px] mt-10">
                Discover a wide range of courses covering a variety of subjects,
                taught by expert instructfors.
              </p>
            </div>
            <div id="button" className="place-content-center  space-x-3 mt-16">
              <button className="p-2  bg-black text-white h-[48px] w-[178px] rounded-[5px] ">
                Start learning now
              </button>
              <button className="h-[48px] w-[164px] border border-black rounded-[5px] text-black  hover:bg-black hover:text-red-700">
                Explore Courses
              </button>
            </div>
          </div>
          <div
            id="imagediv"
            className=" h-[428px] w-[390px] overflow-hidden flex justify-center"
          >
            <Image src="/pic.jpeg" alt="img" width={300} height={300} />
          </div>
        </div>

        <div
          id="sec2"
          className=" h-[428px] w-[400px] overflow-hidden place-content-center space-y-7 sm:w-[800px] sm:h-[228px]  items-center md:flex md:place-content-center md:w-[1024px] lg:w-svw"
        >
          <div className="h-[68px] w-[370px] ml-5 flex items-center justify-center font-[700] text-[30px] sm:text-center sm:w-[800px] sm:text-[33px] lg:w-svw">
            <h1 className="w-[370px]">Trusted by 2000+ companies worldwide.</h1>
          </div>
          <div className="h-14 w-[900px] sm:hidden">
            <Image src="/Logos.png" alt="image" width={990} height={100} />
          </div>
          <div className="h-14 w-[900px] md:visible mb-8">
            <Image src="/Logos.png" alt="image" width={1000} height={100} />
          </div>
        </div>

        <div id="sec3" className=" h-[862px] w-[428px] sm:w-[800px] sm:h-[900px] md:w-[1024px]">
          <div className="  h-[313px] w-[428px]  felx justify-center items-center sm:w-[800px] md:w-[1024px] lg:w-svw ">
            <div>
              <h1 className="place-content-center text-center font-[700] text-[33px] w-[428] sm:w-[800px] sm:pt-36 md:w-[1024px] lg:w-svw">
                Explore Courses By Category
              </h1>
              <p className="w-[400px] text-center sm:w-[800px] md:w-[1024px] lg:w-svw">
                Discover a wide range of courses covering a variety of subjects,
                taught by expert instructors.
              </p>
            </div>
          </div>

          <div className="h-[540px] w-[428px] text-[20px]  sm:w-[800px] md:w-[1024px] lg:w-svw">
            <div className="h-[455px] w-[428px] gap-9  sm:w-[800px] sm:flex sm:mb-0 sm:h-[200px] md:w-[1024px] lg:w-svw">
              <div className=" w-[400px] flex justify-center items-center ml-2">
                <Image src="/Frame1.png" alt="img" width={100} height={100} />
                <div>
                  <h1 className="font-[700]">Design & Development</h1>
                  <p>50+ Courses Available</p>
                </div>
              </div>
              <div className=" w-[410px] flex justify-center items-center">
                <Image src="/Frame2.png" alt="img" width={100} height={100} />
                <div>
                  <h1 className="font-[700]">Marketing</h1>
                  <p>50+ Courses Available</p>
                </div>
              </div>
              <div className=" w-[410px] flex justify-center items-center">
                <Image src="/Frame3.png" alt="img" width={100} height={100} />
                <div>
                  <h1 className="font-[700]">Development</h1>
                  <p>50+ Courses Available</p>
                </div>
              </div>
            </div>
            <div className="h-[100px] w-svw  gap-9 mb-12 hidden sm:flex ">
              <div className=" w-[400px] flex justify-center items-center">
                <Image src="/Frame7.png" alt="img" width={100} height={100} />
                <div>
                  <h1 className="font-[700]">Communication</h1>
                  <p>50+ Courses Available</p>
                </div>
              </div>
              <div className=" w-[410px] flex justify-center items-center">
                <Image src="/Frame8.png" alt="img" width={100} height={100} />
                <div>
                  <h1 className="font-[700]">Digital marketing</h1>
                  <p>50+ Courses Available</p>
                </div>
              </div>
              <div className=" w-[410px] flex justify-center items-center">
                <Image src="/Frame9.png" alt="img" width={100} height={100} />
                <div>
                  <h1 className="font-[700]">Self Development</h1>
                  <p>50+ Courses Available</p>
                </div>
              </div>
            </div>
            <div className="h-132px w-svw gap-9 mb-5 hidden sm:flex ">
              <div className=" w-[400px] flex justify-center items-center">
                <Image src="/Frame4.png" alt="img" width={100} height={100} />
                <div>
                  <h1 className="font-[700]">Business</h1>
                  <p>50+ Courses Available</p>
                </div>
              </div>
              <div className=" w-[410px] flex justify-center items-center">
                <Image src="/Frame5.png" alt="img" width={100} height={100} />
                <div>
                  <h1 className="font-[700]">Finance</h1>
                  <p>50+ Courses Available</p>
                </div>
              </div>
              <div className=" w-[410px] flex justify-center items-center">
                <Image src="/Frame6.png" alt="img" width={100} height={100} />
                <div>
                  <h1 className="font-[700]">Counsulting</h1>
                  <p>50+ Courses Available</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-end sm:w-[800px] md:w-[1024px] lg:w-svw">
              <button className="h-[45px] w-[140px] border border-gray-600 hover:bg-black hover:text-red-700 rounded-[5px] sm:h-[45px]">
                All Courses
              </button>
            </div>
          </div>
        </div>

        <div id="sec4" className="h-[400px]  w-[428px] sm:w-[800px]  sm:place-content-center md:svw lg:w-svw">
          <div className="flex justify-center items-start ">
            <div className="">
              <h1 className="font-[700] text-[32px] md:text-[35px]">Our Achivements</h1>
            </div>
          </div>
          <div className="flex justify-center items-center  w-[428px] sm:w-[750px] md:w-[1024px] lg:w-svw">
            <p className=" w-[370px] text-center mt-8 sm:w-[700px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis libero
              vitae erat. <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, voluptatum at animi sed, maiores ea harum qui illum tenetur libero nesciunt saepe.</span>
            </p>
          </div>

          <div className="flex justify-center h-[86px] w-[428px]  items-center space-x-6 mt-10 text-center sm:w-[750px] md:w-[1024px] md:place-content-around lg:w-svw">
            <div>
              <h1 className="font-[700] text-[25px] md:text-[35px]">+200</h1>
              <p>Courses</p>
            </div>
            <div>
              <h1 className="font-[700] text-[25px] md:text-[35px]">50K</h1>
              <p>Mentors</p>
            </div>
            <div>
              <h1 className="font-[700] text-[25px] md:text-[35px]">370K</h1>
              <p>Students</p>
            </div>
            <div>
              <h1 className="font-[700] text-[25px] md:text-[35px]">100+</h1>
              <p>Recognition</p>
            </div>
          </div>
        </div>

        <div id="course" className="w-[428px] h-[1450px] sm:w-[800px] md:w-[1024px] md:h-[1000px]">
          <div className="w-[428px] h-[64px] flex justify-center font-[700] text-[36px] sm:w-[800px] md:w-[1024px] lg:w-svw">
            <h1>Courses</h1>
          </div>
          <br />
          <div className="w-[428px] h-[64px] flex justify-center sm:w-[800px] md:w-[1024px] lg:w-svw">
            <p className="text-center w-[428px] sm:w-[800px] flex items-center justify-center lg:w-svw">
              Your Ultimate Guide to learning
            </p>
          </div>
          <div className=" h-[920px] w-[428px] md:w-[1024px] lg:w-svw">
            <div className="flex w-[428px] h-[56px] justify-center gap-6 text-center sm:w-[800px] underline font-bold md:w-[1024px] lg:w-svw">
              <h1>Popular</h1>
              <h1>Recommended</h1>
              <h1>Best Price</h1>
            </div>
            <div className="flex justify-center items-center sm:w-[800px] md:w-[1024px] lg:w-svw">
              <div className="gap-9 md:flex">
                <div>
                  <Image src="/im1.png" alt="img" width={280} height={100} />
                </div>
                <div>
                  <Image src="/im2.png" alt="img" width={290} height={100} />
                </div>
                <div>
                  <Image src="/im3.png" alt="img" width={280} height={100} />
                </div>
              </div>
            </div>
            <div className=" hidden md:flex">
              <div className="flex justify-center items-center gap-9 md:w-[1024px] lg:w-svw">
                <div>
                  <Image src="/im4.png" alt="img" width={280} height={100} />
                </div>
                <div>
                  <Image src="/im5.png" alt="img" width={290} height={100} />
                </div>
                <div>
                  <Image src="/im6.png" alt="img" width={280} height={100} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-end">
            <button className="h-[48px] w-[155px] border border-gray-600  rounded-[5px]  hover:bg-black hover:text-red-700 ">
              All Courses
            </button>
          </div>
        <div
          id="ourteams"
          className="h-[1000px] w-[428px]  place-content-center sm:w-[800px] md:w-[1024px] lg:w-svw"
        >
          <div className="h-6 w-[428px] flex justify-center items-center font-[700] text-[32px] sm:w-[800px] md:w-[1024px] md:text-[40px] lg:w-svw">
            <h1>Our teams</h1>
          </div>
          <div className="h-[200px] w-[428px] flex justify-center items-center mt-4 sm:w-[800px] md:w-[1024px] lg:w-svw">
            <h1 className="w-[370px] text-center flex justify-center items-center md:w-[700px] md:text-[20px] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem hit Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iure quasi quam voluptates totam fugiat perferendis.
            </h1>
          </div>

          <div className="gap-[50px] w-[428px] h-[575px] space-x-3 sm:w-[800px] md:w-[1024px] md:space-y-16 lg:w-svw">
            <div
              id="cards"
              className="w-[428px] overflow-hidden h-[210px] gap-[40px] hidden md:flex items-center justify-center md:w-[1024px] lg:w-svw"
            >
              <div  className="">
                <Image
                  className="mt-[80px]"
                  src="/card1.png"
                  alt="img"
                  width={320}
                  height={300}
                />
              </div>
              <div  className="">
                <Image
                  className="mt-[120px] mr-6"
                  src="/card2.png"
                  alt="img"
                  width={300}
                  height={300}
                />
              </div>
              <div>
                <Image
                  className="mt-[130px] mr-[50px]"
                  src="/card3.png"
                  alt="img"
                  width={250}
                  height={300}
                />
              </div>
            </div>
          <div className=" w-[428] sm:w-[800px] sm:flex sm:justify-center sm:pl-16 md:h-[210px] md:w-[1024px] md:pl-0 lg:w-svw">
            <div className=" gap-[40px] sm:w-[500px] md:flex items-center md:w-[1024px] ">
              <div className="pl-[20px] md:pl-0 ">
                <Image  src="/card4.png" alt="img" width={330} height={300} />
              </div>
              <div className="pl-[20px] md:pl-0">
                <Image src="/card5.png" alt="img" width={320} height={320} />
              </div>
              <div>
                <Image
                  className="mt-6 md:mr-[80px]"
                  src="/card6.png"
                  alt="img"
                  width={300}
                  height={300}
                />
              </div>
            </div>
            </div>
          </div>
        </div>

        <div id="reviews" className="h-[700px] w-[428px] sm:w-[800px] md:w-[1024px] md:h-[750px] lg:w-svw">
          <div className="sm:w-[800px] md:w-[1024px] ">
            <h1 className="font[700] text-[32px] text-center md:text-[40px] lg:w-svw">
              Customer testimonials
            </h1>
            <p className="text-center mt-3 md:text-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing.
            </p>
          </div>
          <div className="h-[294px] w-[428px] flex justify-center items-center gap-4 mt-[100px] sm:w-[800px] md:flex md:w-[1024px] lg:w-svw">
            <div>
              <Image src="/card7.png" alt="img" width={300} height={300} />
            </div>
            <div className="hidden md:flex">
              <Image src="/card8.png" alt="img" width={300} height={300} />
            </div>
            <div className="hidden md:flex">
              <Image src="/card9.png" alt="img" width={300} height={300} />
            </div>
          </div>
          <div>
            <Image
              className="ml-2 pt-7 hidden md:flex"
              src="/bar.png"
              alt="img"
              width={2000}
              height={300}
            />
          </div>
        </div>
      </div>
      <div id="footer" className="h-[1211px] w-[428px] sm:w-[800px] md:w-[1024px] md:gap-[200px] md:h-[650px] lg:w-svw">
        <div className="h-[261px] w-[428px] sm:w-[800px] md:flex md:w-[1024px] md:h-[200px] lg:w-svw">
          <div className="md:flex md:gap-[150px]">
            <div className="h-[91px] w-[287px] ml-16  sm:w-[800px] sm:ml-0 md:w-[500px] ">
              <div className="space-x-5">
                <h1 className="font-[700] text-[20px] space-x-2 text-center ">
                  Subscribe to our newsletter
                </h1>
                <p className=" text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className=" flex justify-center pt-4">
              <div >
                <div className="space-y-3 ">
                  <div className="h-[48px] w-[350px] border border-black flex items-center rounded-[5px] text-gray-600 font-[400] ">
                    <h1 className="pl-3">Enter your email</h1>
                  </div>
                  <div className="h-[48px] w-[350px] border border-black flex items-center justify-center rounded-[5px] font-[400] text-gray-600">
                    Subscribe
                  </div>
                </div>
                <div className="mt-3">
                  <p className="text-[12px] text-center ">
                    By subscribing you agree to with our
                    <span className="underline">Privacy Policy</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[428px]  h-[811px] text-center flex justify-center space-y-4 sm:w-[800px] md:w-[1024px] md:h-[225px] lg:w-svw">
          <div className="md:flex">
            <div className="h-[100px] w-[250px] ml-8">
              <Image
                className="pt-3"
                src="/logo.png"
                alt="img"
                width={150}
                height={300}
              />
            </div>
            <div className="h-[185px] w-[250px] space-y-1">
              <h1 className="font-[700] text-[18px] mb-3 underline md:pt-[20px]">Courses</h1>
              <h1>Business</h1>
              <h1>Development</h1>
              <h1>Technology</h1>
              <h1>Design</h1>
              <h1>Programming</h1>
            </div>
            <div className="h-[185px] w-[250px] space-y-1">
              <h1 className="font-[700] text-[18px] underline mb-3 mt-5">
                Resources
              </h1>
              <h1>Career</h1>
              <h1>Resume</h1>
              <h1>Learning</h1>
              <h1>Interview Preparation</h1>
              <h1>Jobs</h1>
            </div>
            <div className="h-[185px] w-[250px] space-y-1">
              <h1 className="font-[700] text-[18px] mb-3 underline mt-5">
                About Us
              </h1>
              <h1>Contact</h1>
              <h1>Help/Support</h1>
              <h1>FAQ</h1>
              <h1>Terms and Conditions</h1>
              <h1>Partners</h1>
            </div>
          </div>
        </div>

        <div className="w-[428px] h-[147px] border-[3px] border-t-gray-600  text-center flex justify-center  sm:w-[800px] md:w-[1024px] md:place-content-between md:h-[80px] lg:w-svw">
          <div className="pt-5 md:flex md:pt-0 md:gap-[350px] md:justify-center ">
            <div className=" font-[700] md:flex md:w-[500px] items-center md:gap-[20px] md:text-[12px]">
              <h1>2023 Ddsgnr. All right reserved.</h1>
              <div className="flex space-x-3 underline mt-4 md:mt-0">
                <h1>Privacy Policy</h1>
                <h1>Terms of Service</h1>
                <h1>Cookies Settings</h1>
              </div>
            </div>
            <div className="flex justify-center items-center mt-5 md:mt-0 md:pl-[200px]">
              <Image src="/icon.png" alt="img" width={120} height={300} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//  <Image src="" alt="img" width={300} height={300}/>
// className="border border-black"
