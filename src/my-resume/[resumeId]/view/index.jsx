function ViewResume() {
    const [resumeInfo, setResumeInfo] = useState();
    const { resumeId } = useParams();

    useEffect(() => {
        GetResumeInfo();
    }, []);

    const GetResumeInfo = () => {
        GlobalApi.GetResumeById(resumeId).then(resp => {
            setResumeInfo(resp.data?.data?.attributes);
        }).catch(error => {
            console.error("Error fetching resume info:", error);
        });
    }

    const HandleDownload = () => {
        window.print();
    }

    return (
        <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }} >
            <div id="no-print">
                <Header />

                <div className='my-10 mx-10 md:mx-20 lg:mx-36'>
                    <h2 className='text-center text-2xl font-medium'>
                        Congrats! Your Ultimate AI generated Resume is ready!
                    </h2>
                    <p className='text-center text-gray-400'>
                        Now you are ready to download your resume and you can share the unique resume URL with your friends and family.
                    </p>
                    <div className='flex justify-between px-44 my-10'>
                        <Button onClick={HandleDownload}>Download</Button>

                        {resumeInfo && (
                            <RWebShare
                                data={{
                                    text: "Hello Everyone, This is my resume please open url to see it",
                                    url: `${import.meta.env.VITE_BASE_URL}/my-resume/${resumeId}/view`,
                                    title: `${resumeInfo.firstName} ${resumeInfo.lastName} resume`,
                                }}
                                onClick={() => console.log("shared successfully!")}
                            >
                                <Button>Share</Button>
                            </RWebShare>
                        )}
                    </div>
                </div>
            </div>

            <div className='my-10 mx-10 md:mx-20 lg:mx-36'>
                <div id="print-area">
                    {resumeInfo && <ResumePreview />}
                </div>
            </div>
        </ResumeInfoContext.Provider>
    );
}

export default ViewResume;
