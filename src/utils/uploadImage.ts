import {
  S3Client,
  PutObjectCommand,
  // DeleteObjectCommand,
} from '@aws-sdk/client-s3'

const imageUrl = process.env.NEXT_PUBLIC_AWS_BUCKET_URL
const s3Client = new S3Client({
  region: process.env.NEXT_PUBLIC_AWS_REGION!,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY!,
  },
})

async function uploadFileToS3(file: File, fileName: string) {
  const params = {
    Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME,
    Key: `${fileName}`,
    Body: file,
    ContentType: 'image/png',
  }

  const command = new PutObjectCommand(params)
  await s3Client.send(command)
  return imageUrl + fileName
}

const uploadImage = async (file: File, type: string): Promise<string> => {
  const imgName = `${type}/${String(Date.now())}`

  const fileName = await uploadFileToS3(file, imgName)

  return fileName
}

export default uploadImage
