import pandas as pd
import streamlit as st
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# Load dataset
df = pd.read_csv(r"C:\Users\hp\Downloads\crimes_punishment_dataset.csv")

# Initialize TF-IDF Vectorizer
vectorizer = TfidfVectorizer()
tfidf_matrix = vectorizer.fit_transform(df['Crime'])

def get_best_match(user_input):
    user_tfidf = vectorizer.transform([user_input])
    similarity = cosine_similarity(user_tfidf, tfidf_matrix)
    best_match_index = similarity.argmax()
    return df.iloc[best_match_index]

# Streamlit Interface
st.set_page_config(page_title="Crime & Punishment Finder", layout="centered")
st.title("🏛️ Crime to Law & Punishment Predictor")
st.write("Enter a crime (e.g., murder, theft, rape) to see applicable IPC section and punishment.")

user_input = st.text_input("Type a crime:")

if user_input:
    result = get_best_match(user_input)
    st.markdown("---")
    st.subheader(f"🔒 Matched Crime: {result['Crime']}")
    st.write(f"**IPC Section:** {result['IPC Section']}")
    st.write(f"**Law Name:** {result['Law Name']}")
    st.write(f"**Punishment:** {result['Punishment']}")
    st.markdown("---")
    st.success("Information retrieved based on closest match.")
