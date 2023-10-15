% Define the input images and their file paths
imageFiles = dir('drawing_evolution/*.jpg');  % Replace 'path_to_images' with your image directory
numImages = numel(imageFiles);
transitionFrames = 60;  % Number of frames for each transition
imageDisplayTime = 60;  % Number of frames each image should be displayed (adjust as needed)

% Define the desired width and height for the resized images
desiredWidth = 800; % Change to your preferred width
desiredHeight = 900; % Change to your preferred height

% Define the brightness factor
brightnessFactor = 1.2;  % You can adjust this value

% Define the standard deviation of the Gaussian filter
sigma = 1;  % You can adjust this value

% Define the width of the edge region (in pixels) to be blended
edgeRegionWidth = 100;  % Adjust to your desired width

% Define the output video file
outputVideoFile = 'output_video.mp4';

% Create a VideoWriter object
outputVideo = VideoWriter(outputVideoFile, 'MPEG-4');
outputVideo.FrameRate = 150;  % Set the frame rate (frames per second)

% Open the video file for writing
open(outputVideo);

% Load and store the images in a cell array, resizing them as necessary
images = cell(numImages, 1);
for i = 1:numImages
    img = imread(fullfile('drawing_evolution/', imageFiles(i).name));

    img = img * brightnessFactor;
    img = min(img, 255);

    img = imgaussfilt(img, sigma);

    % Resize all images to a common size
    img = imresize(img, [desiredHeight, desiredWidth]); % Change size(img) to your desired common size
    images{i} = img;
end

% Loop through each pair of images and create smooth blending transitions
for i = 1:numImages - 1
    img1 = images{i};
    img2 = images{i + 1};
    
    % Display the first image for a longer time
    for k = 1:imageDisplayTime
        % Write the first image without blending
        writeVideo(outputVideo, img1);
    end
    
    for j = 1:transitionFrames
        % Calculate the transition frame for the entire image using alpha blending
        alpha = j / transitionFrames;
        transitionFrame = uint8((1 - alpha) * double(img1) + alpha * double(img2));
        
        % Write the transition frame to the video
        writeVideo(outputVideo, transitionFrame);
    end
    
    % Display the second image for a longer time
    for k = 1:imageDisplayTime
        % Write the second image without blending
        writeVideo(outputVideo, img2);
    end
end

% Close the video file
close(outputVideo);
